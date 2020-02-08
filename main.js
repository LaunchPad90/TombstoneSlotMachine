/*----- constants -----*/
const images = ['doc', 'doc', 'wyatt', 'doc', 'doc', 'doc', 'doc', 'doc'];
let count = images.reduce((acc, image) => {
    acc[image] = acc[image] ? acc[image] + 1 : 1;
    return acc;
    init()
}, {});
console.log(count)
//loop through images and assign numerical values to each object. store in imageValues
const imagesValue = [];

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const spinBtn = document.getElementById('spinBtn');

/*----- event listeners -----*/
spinBtn.addEventListener('click', function (e) {
    // console.log(e.target);
    spin();
    init();
})
/*----- functions -----*/
function spin() {
    for (let i = 0; i < images.length; i++)
        // console.log(imagesValue)
        return imagesValue.push(images);
}

//callback functions lab for help
function grabImg1() {

}

function grabImg2() {

}
function grabImg3() {

}
function init() {
    let rndIdx = Math.floor(Math.random() * images.length);
    console.log(rndIdx)
}
init()