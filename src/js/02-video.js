const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let array = 0

// var throttle = require('lodash.throttle');

import throttle from "lodash.throttle"
const STORAGE_KEY = "videoplayer-current-time"

const saveTools = throttle(() => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
        console.log(localStorage.getItem(STORAGE_KEY));
    }
    catch {
        console.log('error');
        localStorage.setItem(STORAGE_KEY, 0)
    }
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