/*----- constants -----*/
const images = [
    { value: 0, name: 'wyatt', payOut: 10 },
    { value: 1, name: 'morgan', payOut: 25 },
    { value: 2, name: 'doc', payout: 50 }
];

const classes = {
    '0': 'wyatt',
    '1': 'virgil',
    '2': 'doc'
}
/*----- cached element references -----*/
const container = document.getElementById('container');

let msg = document.getElementById('top-bar');

const leftReel = document.getElementById('left-reel');

const middleReel = document.getElementById('middle-reel');

const rightReel = document.getElementById('right-reel');

const spinBtn = document.getElementById('spinBtn');

const bet = document.querySelector('input')
let newBet;

let playerMoney = document.getElementById('player-money');
let money = 200;

const plus = document.getElementById('plus');

const minus = document.getElementById('minus');
/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    msg.style.color = '';
    msg.style.background = '';
    if (bet.value === '') {
        msg.innerText = "MAKE A BET";
        msg.style.color = 'red'
        return;
    }

    if (bet.value <= money) {
        msg.innerText = 'GOOD LUCK!'
        msg.style.color = 'white'
    }

    if (bet.value > money) {
        msg.style.color = 'red';
        msg.innerText = "BET TOO BIG"
        return;
    } else {
        msg.innerText = "GOOD LUCK"
    }

    leftReel.classList = '';
    rightReel.classList = '';
    middleReel.classList = '';

    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
});

plus.addEventListener('click', function (e) {
    msg.style.color = 'white';
    msg.innerText = '';
    var audio = new Audio('sounds/341695__projectsu012__coins-1 (1).wav');
    audio.play();
    if (bet.value >= 0) {
        bet.value++;
    }
});

minus.addEventListener('click', function (e) {
    msg.style.color = 'white';
    msg.innerText = 'SCARED?'
    if (bet.value > 0) {
        bet.value--;
    } else {
        msg.innerText = 'CANT GO LOWER';
    }
});
/*----- functions -----*/

function grabImg1() {
    let rndIdx = Math.floor(Math.random() * images.length);
    let picture = classes[rndIdx]
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            leftReel.classList.add(picture);
            var audio = new Audio('sounds/234305__paulnorthyorks__gunshot.wav');
            audio.play();
        }
    }
}

function grabImg2() {
    let rndIdx = Math.floor(Math.random() * images.length);
    let picture = classes[rndIdx]
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            middleReel.classList.add(picture);
            var audio = new Audio('sounds/234305__paulnorthyorks__gunshot.wav');
            audio.play();
        }
    }
}

function grabImg3() {
    let rndIdx = Math.floor(Math.random() * images.length);
    let picture = classes[rndIdx]
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            rightReel.classList.add(picture);
            var audio = new Audio('sounds/234305__paulnorthyorks__gunshot.wav');
            audio.play();
        }
    }
    checkWinner();
}

function checkWinner() {
    msg.style.background = '';
    newBet = parseInt(bet.value);
    if (leftReel.classList.value === middleReel.classList.value && middleReel.classList.value === rightReel.classList.value) {
        var audio = new Audio('sounds/361346__jack126guy__slot-machine-payout.wav');
        audio.play();
        msg.style.color = 'green'
        msg.innerText = 'Congratulations!'
        money += newBet;
        playerMoney.innerText = money;
    } else {
        msg.style.color = 'red'
        msg.innerText = 'SPIN AGAIN?'
        money -= newBet;
        playerMoney.innerText = money;
    }
}