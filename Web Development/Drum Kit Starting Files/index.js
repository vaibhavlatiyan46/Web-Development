for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var buttonText=this.innerHTML;
        makesSound(buttonText);
        animation(buttonText);
    });
}

document.addEventListener("keypress",function(event){
    makesSound(event.key);
    animation(event.key);
});

function makesSound(buttonText){
    switch (buttonText) {
        case "w":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
       default:
            console.log(buttonText);
           break;
   }
}

function animation(buttonText){
    document.querySelector("."+buttonText).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+buttonText).classList.remove("pressed");
    },100);
}