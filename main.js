/*----- constants -----*/
const images = ['doc', 'doc', 'wyatt', 'doc', 'doc', 'doc', 'doc', 'doc', 'virgil', 'wyatt', 'wyatt', 'virgil'];
let count = images.reduce((acc, image) => {
    acc[image] = acc[image] ? acc[image] + 1 : 1;
    return acc;
}, {});
console.log(count)
//loop through images and assign numerical values to each object. store in imageValues
const imagesValue = [];

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const spinBtn = document.getElementById('spinBtn');
const leftReel = document.getElementById('left-reel');
const middleReel = document.getElementById('middle-reel');
const rightReel = document.getElementById('right-reel');


/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    // console.log(e.target);
    spin();
    init();
    setTimeout(grabImg1, 1000);
    setTimeout(grabImg2, 2000);
    setTimeout(grabImg3, 3000);
})
/*----- functions -----*/
function spin() {
    for (let i = 0; i < images.length; i++)
        // console.log(imagesValue)
        return imagesValue.push(images);
}

//callback functions lab for help
function grabImg1() {
    let rndIdx = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.style.fontSize = '30px';
    div.style.textAlign = 'center';
    div.style.marginTop = '20vh';
    div.innerText = rndIdx;
    leftReel.appendChild(div);
    console.log(div);
    console.log(rndIdx)
}

function grabImg2() {
    let rndIdx = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.style.fontSize = '30px';
    div.style.textAlign = 'center';
    div.style.marginTop = '20vh';
    div.innerText = rndIdx;
    middleReel.appendChild(div);
    console.log(div);
    console.log(rndIdx)
}
function grabImg3() {
    let rndIdx = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.style.fontSize = '30px';
    div.style.textAlign = 'center';
    div.style.marginTop = '20vh';
    div.innerText = rndIdx;
    rightReel.appendChild(div);
    console.log(div);
    console.log(rndIdx)
}
function init() {
    let rndIdx = Math.floor(Math.random() * images.length);
    console.log(rndIdx)
}