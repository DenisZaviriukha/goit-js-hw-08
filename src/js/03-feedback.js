import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')
const email = document.querySelector('.feedback-form input')
const message = document.querySelector('.feedback-form textarea')
const STORAGE_KEY = "feedback-form-state"

fillForm()
function fillForm() {
  const faceControl  = localStorage.getItem(STORAGE_KEY)
  if (JSON.parse(faceControl)) {
      b = JSON.parse(faceControl)
      email.value = b.email
      message.value = b.message 
      return
  }
    email.value = ''
    message.value = ''
    return
}

function onFormInput () { 
  dataArray = {
    email: email.value,
    message: message.value
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArray))
  console.log(localStorage.getItem(STORAGE_KEY))
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



// function updateOutput() {
//   form.elements.value = localStorage.getItem(STORAGE_KEY) || "";
// }

// updateOutput()
// let dataArray = {
//   email: '',
//   message: ''
// }
// const onFormInput = (e) => {
//     e.preventDefault()
//    if (e.target.name === 'email') {
//         dataArray.email = e.target.value
//         localStorage.setItem( STORAGE_KEY, JSON.stringify(dataArray.name)) 
//         console.log(localStorage.getItem(STORAGE_KEY))
//     }
//     if (e.target.name === 'message') {
//         dataArray.message = e.target.value
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArray))
//         // e.target.value = localStorage.getItem("feedback-form-state")
//         console.log(localStorage.getItem(STORAGE_KEY))
//     }
// }
