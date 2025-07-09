let time = 60;
let timer;
let isRunning = false;

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            isRunning = false;
            return;
        }
        time--;
        updateDisplay();
    }, 1000);
}

function resetTimer(){
    clearInterval(timer);
    time = 60;
    isRunning = false;
    updateDisplay();
}

function updateDisplay(){
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${seconds}`
}

updateDisplay();