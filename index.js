
// For random images url
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSrc = "images/" + randomDiceImg;

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;

// Get the element and manipulate it
document.querySelector(".img1").setAttribute("src", randomImgSrc);
document.querySelector(".img2").setAttribute("src", randomImgSrc2);

// Logic
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<img class='flag-1' src='images/flag-1.png' height='200' width='100%'>Player 1 Win!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<img class='flag-2' src='images/flag-2.png' height='200'>Player 2 Win!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
