/*----- constants -----*/
const images = [
    { value: 0, name: 'wyatt', payOut: 10 },
    { value: 1, name: 'morgan', payOut: 25 },
    { value: 2, name: 'doc', payout: 50 }
];

// const probability = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];  
// console.log(probability)

/*----- app's state (variables) -----*/

let betHolder = [];

/*----- cached element references -----*/
const spinBtn = document.getElementById('spinBtn');

const leftReel = document.getElementById('left-reel');

const middleReel = document.getElementById('middle-reel');

const rightReel = document.getElementById('right-reel');

const betBtn = document.getElementById('betBtn');
console.log(betBtn)

const bet = document.querySelector('input');
console.log(bet.innerText);

const playerMoney = document.getElementById('player-money');
console.log(playerMoney)


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    // console.log(e.target);
    function spin() {
        let rndIdx = Math.floor(Math.random() * images.length);
        // console.log(rndIdx)
    }
    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
})

betBtn.addEventListener('click', function (e) {
    console.log(bet.value);
    betHolder.push(bet.value);
})
/*----- functions -----*/
function placeBet() {
    if (parseInt(bet.value) < parseInt(playerMoney.innerText)) {
        playerMoney.innerText = parseInt(playerMoney.innerText) - parseInt(bet.value);
    }
    if (checkWinner === true) {
        parseInt(playerMoney.innerText) += parseInt(bet.value * 2)
    }
    console.log(parseInt(bet.value));
    console.log(parseInt(playerMoney.innerText))
}

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

    function checkWinner(winner) {
        if (leftReel.innerHTML === middleReel.innerHTML && leftReel.innerHTML === rightReel.innerHTML) {
            playerMoney.innerText += (bet.value * 2);
        } else {
            playerMoney.innerText -= (bet.value);
        }
    }
    checkWinner();
}