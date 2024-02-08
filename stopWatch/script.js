let display = document.getElementById('display');
let timer = 0;
let elapsedTime = 0;
let isRunning = false;
let intervalId = null; // Added variable to store the interval ID

function start() {
    if (isRunning) return;
    isRunning = true;
    elapsedTime = Date.now();
    intervalId = setInterval(function () {
        let currentTime = Date.now();
        let timeDiff = currentTime - elapsedTime;
        elapsedTime = currentTime;
        timer += timeDiff / 1000;
        update();
    }, 100);
}

function stop() {
    if (!isRunning) return; // Added check to prevent stopping when not running
    isRunning = false;
    clearInterval(intervalId); // Added clearInterval to stop the timer
}

function reset() {
    stop(); // Stop the timer before resetting
    timer = 0;
    display.innerHTML = '00:00:00';
}

function update() {
    let hour = Math.floor(timer / 3600).toString().padStart(2, '0');
    let min = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
    let sec = Math.floor(timer % 60).toString().padStart(2, '0');
    let mnSec = Math.floor((timer - Math.floor(timer)) * 100).toString().padStart(2, '0');
    display.innerHTML = hour + ':' + min + ':' + sec + ':' + mnSec;
}