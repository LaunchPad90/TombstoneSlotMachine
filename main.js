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
/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    msg.style.color = '';
    msg.style.background = '';
    if (bet.value === '') {
        msg.innerText = "MAKE A BET";
        msg.style.color = 'red'
        return;
    }

    if (bet.value <= playerMoney.innerText) {
        msg.innerText = 'GOOD LUCK!'
        msg.style.color = '#FCA311'
    }

    if (bet.value > playerMoney.innerText) {
        msg.innerText = "NOT ENOUGH COIN"
        return;
    }

    leftReel.classList = '';
    rightReel.classList = '';
    middleReel.classList = '';

    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
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
    console.log(newBet)
    console.log(money)
    if (leftReel.classList.value === middleReel.classList.value && middleReel.classList.value === rightReel.classList.value) {
        var audio = new Audio('sounds/361346__jack126guy__slot-machine-payout.wav');
        audio.play();
        msg.style.color = '#F5F749'
        msg.innerText = 'Congratulations!'
        money += newBet;
        playerMoney.innerText = money;
    } else {
        msg.style.color = '#565554'
        msg.innerText = 'Spin again?'
        money -= newBet;
        playerMoney.innerText = money;
    }
}