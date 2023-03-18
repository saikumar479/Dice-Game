alert("No helana please just a beginner's work");
var random1=Math.floor(Math.random()*6)+1;


var randomDice="images/dice"+random1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDice);

var r2=Math.floor(Math.random()*6)+1;

var r2img="images/dice"+r2+".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",r2img);

if(random1>r2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(r2>random1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML="No one wins!";
}
