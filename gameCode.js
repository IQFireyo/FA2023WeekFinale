function playGame(){
     
    console.log("playGame() started");
    var die1 = document.getElementById("die1Res").innerHTML = Math.floor(Math.random() * 6) + 1; 
    var die2 = document.getElementById("die2Res").innerHTML = Math.floor(Math.random() * 6) + 1;
    var sum = document.getElementById("sumRes").innerHTML = Number(die1)+Number(die2);

    if (sum == 7 || sum == 11) {
        document.getElementById("finRes").innerHTML = "You Lose"
      } else if (die1==die2 & die1 % 2 == 0){
        document.getElementById("finRes").innerHTML = "You WIN, Thats Some Crazy Luck"
      }else{
        document.getElementById("finRes").innerHTML = "You Pushed"
      }
}

function playSound() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
function stopSound() {
  var audio = document.getElementById("myAudio");
  audio.pause(); 
  audio.currentTime = 0; // Reset the audio to the beginning
}

