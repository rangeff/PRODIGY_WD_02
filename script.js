let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function updateDisplay() {
    let display = document.getElementById("display");
    let formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
    display.innerText = formattedTime;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        document.getElementById("startStop").innerText = "Pause";
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").innerText = "Start";
    isRunning = false;
}

document.getElementById("startStop").addEventListener("click", startStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);

updateDisplay();