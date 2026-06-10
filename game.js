//var gamePattern

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").on("click", function() {
              
      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      console.log(userClickedPattern);
      playSound(userChosenColour);
 });

function playSound(name){
 var soundSource = "sounds/"+name + ".mp3";
  var sound = new Audio(soundSource);
  sound.play();
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var activeButton = $("#"+randomChosenColour);

  activeButton.animate({opacity:0}, 0.3);
  activeButton.animate({opacity:1});

 //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
 
}

