



const dot1 = 'onee.png';
const dot2 = 'twoo.png';
const dot3 = 'threee.png';
const dot4 = 'fourr.png';
const dot5 = 'fivee.png';
const dot6 = 'sixx.png';


function rollDice(newSrc) {
    // image.src = 'new-image.jpg';
    myImage.setAttribute("src", "/images/my-image.jpg");
    var image = document.getElementById('pic1');
    var image = document.getElementById('pic2');
    image.src = newSrc;
}