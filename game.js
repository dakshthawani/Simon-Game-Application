var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPatttern = [];
var started = false;
var level = 0;

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

$('.btn').click(function(){
    var userChosenColor = $(this).attr("id")
    userClickedPatttern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPatttern.length - 1);
})

$(document).keypress(function(){
    if(!started) {
    nextSequence();
    started = true;
    $('h1').text("Level " + level)
    }
})

function nextSequence(a, b) {
    userClickedPatttern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor);
    level++;
    $('h1').text("Level " + level)
    
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass("pressed");
    setTimeout(function(){
        $('#' + currentColor).removeClass("pressed");
    },100)
        }

function checkAnswer(currentLevel){
    if (userClickedPatttern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if(userClickedPatttern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000)
        };
    }
    else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        startOver();
        
    }

    function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
        userClickedPatttern = [];
        $(document).keypress(function(){
            if(!started) {
                $('h1').text("Level " + level);
                nextSequence();
                started = true; 
            
            }
        });
    }

}

