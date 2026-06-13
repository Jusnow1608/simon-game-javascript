var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var  isGameStarted = false;

var level = 0;

  $(document).on("keydown", function(){
    if (!isGameStarted){
    
    $("#level-title").text("Level "+ level);
    nextSequence();
    isGameStarted = true;
    }
  });


$(".btn").on("click", function() {
              
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
 });


function playSound(name){
  var soundSource = "sounds/"+name + ".mp3";
  var sound = new Audio(soundSource);
  sound.play();
}

function nextSequence(){
  
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var activeButton = $("#"+randomChosenColour);

  activeButton.animate({opacity:0}, 300).animate({opacity:1});

 //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
 }

 function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");

 setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);

 }

