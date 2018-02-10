// inspiration: 
// @truth.potato
// https://www.instagram.com/truth.potato/?hl=en
// https://www.boredpanda.com/bitter-wisdom-truth-potato/

// global variables
var canvas = document.getElementById('potatoCanvas');
var context = canvas.getContext('2d');
var targetImg = document.getElementById('target');
var potatoes = Array.from(document.querySelectorAll('.potato'));
var textInput = document.getElementById('textInput');
var text = 'Not everyone likes you';

// setup canvas
canvas.width = canvasWidth();
canvas.height = canvasWidth();

// load default image
var selectedPotato = potatoes[0];

// load base font
const myFont = new FontFace('annie', 'url(https://fonts.gstatic.com/s/annieuseyourtelescope/v8/daaLSS4tI2qYYl3Jq9s_Hu74xwktnlKxH6osGVGTkz3A_0YFZQ.woff2)');

myFont.load().then((font) => {
    document.fonts.add(font);
    context.textAlign = 'center';
    renderText(text);
});

// event listeners
textInput.addEventListener('change', function (e) {
    text = e.target.value;
    renderText(text);
})

targetImg.addEventListener('click', function () {
    pickNewPotato();
})


// functions
function renderText(text) {
    addImage(selectedPotato);
    renderTitle();

    var fontSize = canvas.height * .04;
    context.font = fontSize + 'pt annie';
    context.fillText(text, canvas.width / 2, canvas.height * .32);

    convertCanvasToImage()
}

function renderTitle() {
    var text = 'Truth Potato';
    var fontSize = canvas.height * .06;
    context.font = fontSize + 'pt annie';
    context.fillText(text, canvas.width / 2, canvas.height * .19);
}

function addImage(imageObj) {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function convertCanvasToImage() {
    var image = new Image();
    targetImg.src = canvas.toDataURL("image/png");
}

function pickNewPotato() {
    var randomPotatoIndex = Math.floor(potatoes.length * Math.random());
    selectedPotato = potatoes[randomPotatoIndex];
    renderText(text)
}

function canvasWidth() {
    var maxWidth = 740;
    return window.innerWidth < maxWidth ? window.innerWidth : maxWidth;
}