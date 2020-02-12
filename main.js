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

const spinBtn = document.getElementById('spinBtn');

const leftReel = document.getElementById('left-reel');

const middleReel = document.getElementById('middle-reel');

const rightReel = document.getElementById('right-reel');

const bet = document.querySelector('input')
let newBet;

let playerMoney = document.getElementById('player-money');
let money = parseInt(playerMoney.innerText)

let msg = document.getElementById('top-bar');


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    if (bet.value === '') {
        msg.innerText = "MAKE A BET";
        msg.style.backgroundColor = 'red'
        return;
    }

    if (bet.value > money) {
        msg.innerText = "NOT ENOUGH COIN"
        return;
    } else {
        msg.innerText = "GOOD LUCK"
    }

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

        function checkWinner() {
            newBet = parseInt(bet.value);
            if (leftReel.classList === middleReel.classList && leftReel.classList === rightReel.classList) {
                console.log(playerMoney)
                return playerMoney.innerText = (money + newBet);
            } else {
                return playerMoney.innerText = (money - newBet);
            }
        }
        checkWinner();
    }
}