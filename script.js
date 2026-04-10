function changeColor() {

}
var colors = ["red", "blue", "green", "yellow"];
var random = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[random];
