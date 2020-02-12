/*----- constants -----*/
const images = [
    { value: 0, name: 'wyatt', payOut: 10 },
    // { value: 1, name: 'morgan', payOut: 25 },
    // { value: 2, name: 'doc', payout: 50 }
];

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


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    if (bet.value === '') {
        alert('Place a bet first!')
        return;
    }

    if (bet.value > playerMoney.innerText) {
        alert('you broke');
        return;
    }

    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
});
/*----- functions -----*/

function grabImg1() {
    let rndIdx = Math.floor(Math.random() * images.length);
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            const p = document.createElement('p');
            p.innerText = images[i].name;
            leftReel.appendChild(p);
            console.log(p);
            console.log(images[i].value)
        }
    }
}

function grabImg2() {
    let rndIdx = Math.floor(Math.random() * images.length);
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            const p = document.createElement('p');
            p.innerText = images[i].name;
            middleReel.appendChild(p);
            console.log(p);
            console.log(images[i].value)
        }
    }
}

function grabImg3() {
    let rndIdx = Math.floor(Math.random() * images.length);
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            const p = document.createElement('p');
            p.innerText = images[i].name;
            rightReel.appendChild(p);
            console.log(p);
            console.log(images[i].value)
        }
    }

    function checkWinner() {
        newBet = parseInt(bet.value);
        if (leftReel.innerText === middleReel.innerText && leftReel.innerText === rightReel.innerText) {
            console.log(playerMoney)
            return playerMoney.innerText = (money + newBet);
        } else {
            return playerMoney.innerText = (money - newBet);
        }
    }
    checkWinner();
}