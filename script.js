var canvas = document.getElementById('potatoCanvas');
var context = canvas.getContext('2d');
var targetImg = document.getElementById('target');

var imageObj = new Image();

imageObj.onload = function () {
    context.imageSmoothingEnabled = false;
    imageObj.setAttribute('crossOrigin', 'anonymous')
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;

    addImage(imageObj);
};

imageObj.src = './potato_1.png';


const myFont = new FontFace('annie', 'url(https://fonts.gstatic.com/s/annieuseyourtelescope/v8/daaLSS4tI2qYYl3Jq9s_Hu74xwktnlKxH6osGVGTkz3A_0YFZQ.woff2)');

myFont.load().then((font) => {
    document.fonts.add(font);
    context.textAlign = 'center';
    renderTitle();
    renderText('Not everyone likes you.');
    convertCanvasToImage()
    
});

document.getElementById('txt').addEventListener('change', function (e) {
    console.log('e =', e.target.value);
    clearCanvas();
    addImage(imageObj);
    renderTitle();
    renderText(e.target.value);
    convertCanvasToImage()
})


// functions
function renderText(text) {
    var fontSize = canvas.height * .04;
    context.font = fontSize + 'pt annie';
    context.fillText(text, canvas.width / 2, canvas.height * .32);
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
	// return image;
}
