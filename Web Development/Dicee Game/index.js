var rnd=Math.floor(Math.random()*6)+1;

var i="images/dice"+rnd+".png";
document.querySelector("img.img1").setAttribute("src",i);




// // for 2nd playe

var rd=Math.floor(Math.random()*6)+1;
var i="images/dice"+rd+".png";
document.querySelector("img.img2").setAttribute("src",i); 




if(rnd>rd){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(rd>rnd){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}