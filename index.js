// For left image
var randomNumber1 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");

// For right image
var randomNumber2 = Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");

// changing the h1 tag
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 wins!"
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent="Draw!"
}
else{
  document.querySelector("h1").textContent="Player 2 wins! 🚩"
}
