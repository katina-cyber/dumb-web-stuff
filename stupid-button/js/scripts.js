let yeeButton = document.getElementById("yee-button"); 
let backButton = document.getElementById("back-button");
let yeeAudio = new Audio("yee.wav");



yeeButton.addEventListener("mouseover", playSoundAndMove, true);
backButton.addEventListener("click", resetYeeButtonPosition, false);

function playSoundAndMove() {
  console.log("you called the playSound function!");

  
  yeeAudio.play();
  
  //below code changes the position of the yee button
  
  yeeButton.style.position = "absolute";
  yeeButton.style.left = Math.floor(Math.random() * window.innerWidth + 100) + "px";
  //add 100 to the new height to make sure the button changes position enough so the user can't click it
  yeeButton.style.top = Math.floor(Math.random() * window.innerHeight - 100) + "px"; 
  
  console.log("end move");
  return false;
}

/*
function resetYeeButtonPosition() {
    console.log("reload press");
   
    yeeButton.style.left = null;
    yeeButton.style.top = null;
    yeeButton.style.position = null;
    console.log("end press");
}

console.log("moving...");
*/








