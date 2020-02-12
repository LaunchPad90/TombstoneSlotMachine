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

/*----- app's state (variables) -----*/
let betHolder = [];
/*----- cached element references -----*/
const container = document.getElementById('container');

const spinBtn = document.getElementById('spinBtn');

const leftReel = document.getElementById('left-reel');

const middleReel = document.getElementById('middle-reel');

const rightReel = document.getElementById('right-reel');

const bet = document.querySelector('input')
let newBet;

let playerMoney = document.getElementById('player-money');
let money = 200;

let msg = document.getElementById('top-bar');


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    if (bet.value === '') {
        msg.innerText = "MAKE A BET";
        msg.style.backgroundColor = 'red'
        return;
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
        }
    }
}

function grabImg2() {
    let rndIdx = Math.floor(Math.random() * images.length);
    let picture = classes[rndIdx]
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            middleReel.classList.add(picture);
        }
    }
}

function grabImg3() {
    let rndIdx = Math.floor(Math.random() * images.length);
    let picture = classes[rndIdx]
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            rightReel.classList.add(picture);
        }
    }
    checkWinner();
}


function checkWinner() {
    newBet = parseInt(bet.value);
    console.log(newBet)
    console.log(money)
    if (leftReel.class === middleReel.class && leftReel.class === rightReel.class) {
        console.log(playerMoney)
        money += newBet;
        playerMoney.innerText = money;
    } else {
        money -= newBet;
        playerMoney.innerText = money;
    }
}