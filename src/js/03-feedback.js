import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')
const email = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')
const STORAGE_KEY = "feedback-form-state"

fillForm()

function fillForm() {
  const faceControl  = localStorage.getItem(STORAGE_KEY)
  if (JSON.parse(faceControl)) {
    let test = JSON.parse(faceControl)
    email.value = test.email
    message.value = test.message
  } else {
    email.value = ''
    message.value = ''
  }
}

function onFormInput () { 
  let dataArray = {
    email: email.value,
    message: message.value
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArray))
}

const onSubmit = (e) => {
  e.preventDefault()
  if (email.value.trim() !== '' && message.value.trim() !== '') {
    console.log(localStorage.getItem(STORAGE_KEY))
    localStorage.clear()
    e.currentTarget.reset()
    return
  }
  return alert('fill hte inputs')
}

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onSubmit)