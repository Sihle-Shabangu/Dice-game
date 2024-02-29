const dot1 = 'pictures/onee.png';
const dot2 = 'pictures/twoo.png';
const dot3 = 'pictures/threee.png';
const dot4 = 'pictures/fourr.png';
const dot5 = 'pictures/fivee.png';
const dot6 = 'pictures/sixx.png';
let die1;
let die2;


function rollDice() {
    rndnumber1 = Math.floor(Math.random() * 6) + 1;
    rndnumber2 = Math.floor(Math.random() * 6) + 1;
    if (rndnumber1 == 1){
        die1 = dot1;
    } else if (rndnumber1 == 2){
        die1 = dot2;
    } else if (rndnumber1 == 3){
        die1 = dot3;
    } else if (rndnumber1 == 4){
        die1 = dot4;
    } else if (rndnumber1 == 5){
        die1 = dot5;
    } else if (rndnumber1 == 6){
        die1 = dot6;
    }

    if (rndnumber2 == 1){
        die2 = dot1;
    } else if (rndnumber2 == 2){
        die2 = dot2;
    } else if (rndnumber2 == 3){
        die2 = dot3;
    } else if (rndnumber2 == 4){
        die2 = dot4;
    } else if (rndnumber2 == 5){
        die2 = dot5;
    } else if (rndnumber2 == 6){
        die2 = dot6
    }
    let image1 = document.getElementById('pic1');
    let image2 = document.getElementById('pic2');
    image1.src = die1;
    image2.src = die2;
    console.log(rndnumber1, rndnumber2)
}