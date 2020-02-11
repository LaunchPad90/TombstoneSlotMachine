/*----- constants -----*/
const images = [
    { value: 0, name: 'wyatt', payOut: 1000 },
    { value: 1, name: 'morgan', payOut: 2500 },
    { value: 2, name: 'virgil', payOut: 3000 },
    { value: 3, name: 'doc', payout: 5000 }
];

// const probability = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];  
// console.log(probability)

/*----- app's state (variables) -----*/
let winner;

let msg = document.createElement('h2');

// if (leftReel.innerText === rightReel.innerText && leftReel === middleReel) 

/*----- cached element references -----*/
const spinBtn = document.getElementById('spinBtn');

const leftReel = document.getElementById('left-reel');

const middleReel = document.getElementById('middle-reel');

const rightReel = document.getElementById('right-reel');


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    // console.log(e.target);
    spin();
    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
})
/*----- functions -----*/
function spin() {
    let rndIdx = Math.floor(Math.random() * images.length);
    console.log(rndIdx)
}

function grabImg1() {
    let rndIdx = Math.floor(Math.random() * images.length);
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            const p = document.createElement('p');
            p.innerText = images[i].name;
            leftReel.appendChild(p);
            console.log(p);
            console.log(images[i].name)
        }
    }


    console.log(rndIdx)
}

function grabImg2() {
    let rndIdx = Math.floor(Math.random() * images.length);
    for (let i = 0; i < images.length; i++) {
        if (images[i].value === rndIdx) {
            const p = document.createElement('p');
            p.innerText = images[i].name;
            middleReel.appendChild(p);
            console.log(p);
            console.log(images[i].name)
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
            console.log(images[i].name)
        }
    }

    function checkWinner() {
        if (leftReel.innerHTML === middleReel.innerHTML && leftReel.innerHTML === rightReel.innerHTML) {

        }
    }

    function updateMsg(msg) {
        msg.appendChild('#top-bar')
    }

}