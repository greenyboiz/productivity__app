const screens = document.querySelectorAll('.game-screen');
const singleScreen = document.getElementById('game-layer');
const chooseInsect = document.querySelectorAll('.choose-insect');
const startBtn = document.getElementById('play-game');
const gamePlay = document.getElementById('game-play');
const scoreEle = document.getElementById('score');
const timeEle = document.getElementById('time');
const fullScreen = document.getElementById('main');
let seconds = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('active'));

chooseInsect.forEach(item => {
    item.addEventListener('click', () => {
        const insectImg = item.querySelector('img');
        const src = insectImg.getAttribute('src');
        selectedInsect = {
            src
        };
        screens[1].classList.add('active');
        setTimeout(createInsect, 1000);
        startGame();
    })
});

function startGame() {
    setInterval(timeCounting, 1000);
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const {
        x,
        y
    } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selectedInsect.src}" style="transform: rotate(${Math.random() * 360}deg" />`;
    insect.addEventListener('click', catchInsect);
    gamePlay.appendChild(insect);

}

function getRandomLocation() {
    const width = window.innerWidth - 200;
    const height = window.innerHeight - 200;
    console.log(height)
    const x = Math.random() * width + 100;
    const y = Math.random() * height + 100;
    console.log(y)
    return {
        x,
        y
    };
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => {
        this.remove();
    }, 2000);
    addInsect();
}

function addInsect() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 2000);
}

function increaseScore() {
    score++;
    scoreEle.innerHTML = `Score: ${score}`;
}

function timeCounting() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEle.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}