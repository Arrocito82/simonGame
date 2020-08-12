class ColorButton {
    constructor(color, audioScr) {
        this.color = color;
        this.sound = new Audio(audioScr);

    }
    playSound() {
        this.sound.play();
    }
}
var buttonColours = [];
buttonColours.push(new ColorButton("red", "sounds/red.mp3"));
buttonColours.push(new ColorButton('yellow', 'sounds/yellow.mp3'));
buttonColours.push(new ColorButton('blue', 'sounds/blue.mp3'));
buttonColours.push(new ColorButton('green', 'sounds/green.mp3'));


var gamePattern = [];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern[0] = randomChosenColour;
$("#" + randomChosenColour.color).fadeOut(100).fadeIn(100);
gamePattern[0].playSound();

function nextSequence() {
    var randomNumber = Math.round(3 * Math.random());
    return randomNumber;
}