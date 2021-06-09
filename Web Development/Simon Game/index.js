var gamePattern=[];
var userClickedPattern=[];
var buttonColors= ["red", "blue", "green", "yellow"];
var level=0;
var started=false;

$(document).on("keypress",function (event){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});


$(".btn").on("click",function(event){
    var userChosenColour=event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        startOver();
    }
}

function startOver(){
    level=0;
    started=false;
    gamePattern=[];
}

function nextSequence(){
    userClickedPattern=[]
    level+=1;
    $("#level-title").text("Level " + level);
    var rnd=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[rnd];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var randomChosenColour=name;
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$("#"+currentColour).removeClass("pressed");},100);
}