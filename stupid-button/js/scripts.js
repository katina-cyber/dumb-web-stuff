var yeeButton = document.getElementById("yee-button");

yeeButton.addEventListener("click", playSound);

function playSound() {
  console.log("you called the playSound function!");
  var beep = new Audio("beep.wav");
  beep.play();
}
