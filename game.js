var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var wrong = new Audio('sounds/wrong.mp3');
var level = 0;
$("p").toggle();
$("#instrucciones").click(function() {
    $("p").fadeToggle();
});

function playSound(colorName) {
    var audio = new Audio();
    audio.src = "sounds/" + colorName + ".mp3";
    audio.play();
}

function animate(colorName) {
    $('#' + colorName).addClass("pressed");
    $("#" + colorName).fadeIn(100).fadeOut(100).fadeIn(100);
    setTimeout(() => {
        $('#' + colorName).removeClass("pressed");
    }, 100);

}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animate(randomChosenColour);
    playSound(randomChosenColour);
}



$("#start").click(function() {

    if (level == 0) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
        $("h1").text("Level " + level);
        $(this).fadeOut();
    }

});

function checkAnswer(currentLevel) {
    var answer = userClickedPattern[currentLevel] === gamePattern[currentLevel];

    return answer;
}
// nextSequence();
$(".btn").click(
    function() {
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor); //this is saving the name of the color

        var answer = checkAnswer(userClickedPattern.length - 1);
        if (answer === true) {
            playSound(userChosenColor);
            animate(userChosenColor);
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(() => {
                    level++;
                    $("h1").text("Level " + level);
                    nextSequence();
                }, 1000);
                userClickedPattern = [];
            }
        } else {
            wrong.play();
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 2000);
            $("h1").text("Game Over");
            level = 0;
            gamePattern = [];
            userClickedPattern = [];
            setTimeout(() => {
                $("#start").text("Restart").toggle();
            }, 3000);
        }

    });