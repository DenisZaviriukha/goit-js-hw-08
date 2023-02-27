const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let array = 0

// var throttle = require('lodash.throttle');

import throttle from "lodash.throttle"
const STORAGE_KEY = "videoplayer-current-time"

if(!localStorage.getItem(STORAGE_KEY)){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(array))
}

const saveTools = throttle(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
    console.log(localStorage.getItem(STORAGE_KEY));
}, 1000)

player.on('play', function () {
console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
    
});

player.on('timeupdate', function (currentTime) {
    array = currentTime.seconds

    saveTools()     
});


player.setCurrentTime(localStorage.getItem(STORAGE_KEY))