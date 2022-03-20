const time = document.querySelector('.pomodoro__time');
const state = document.querySelector('.pomodoro__state');
const modeItem = document.querySelectorAll('.mode-item');
const startedMsg = document.querySelector('.start-message');

let countdown = 0;

function countdownTimer(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemain = seconds % 60;
    const displayTime = `${minutes} : ${secondsRemain < 10 ? '0' : ''}${secondsRemain}`;
    document.title = displayTime;
    time.textContent = displayTime;
}

function timer(seconds) {
    clearInterval(countdown);
    const start = Date.now();
    const finish = start + seconds * 1000;
    countdownTimer(seconds);

    countdown = setInterval(() => {
        const secondsRemain = Math.round((finish - Date.now()) / 1000);
        if(secondsRemain <= 0) {
            clearInterval(countdown);
            time.innerHTML = 'Time Up!'
        }
        countdownTimer(secondsRemain);
    }, 1000);
}

function switchModes(mode) {
    const modeTime = parseInt(mode.target.dataset.time, 10);
    modeItem.forEach(item => {
        item.classList.remove('active');
    });
    mode.target.classList.add('active');
    startedMsg.style.display = 'none';
    timer(modeTime);
}

modeItem.forEach(item => {
    item.addEventListener('click', switchModes);
})