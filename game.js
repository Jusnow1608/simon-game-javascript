var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var  isGameStarted = false;

var level = 0;
//start of the game through keypress
  $(document).on("keydown", function(){
    if (!isGameStarted){
    
    $("#level-title").text("Level "+ level);
    nextSequence();
    isGameStarted = true;
    }
  });

//waiting for user answer by clicking in buttons
$(".btn").on("click", function() {
              
    var userChosenColour = $(this).attr("id");
    //from where should I take current level?
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    var currentLevel = userClickedPattern.length-1;
    console.log(currentLevel);

    checkAnswer(currentLevel);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
 });


function playSound(name){
  var soundSource = "sounds/"+name + ".mp3";
  var sound = new Audio(soundSource);
  sound.play();
}
//building a sequence in each level beggining from 1
function nextSequence(){
  userClickedPattern =[];
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); 
  console.log(gamePattern);
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

 function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel]===gamePattern[currentLevel])
{
  console.log("success");
  if (userClickedPattern.length===gamePattern.length){
    setTimeout(function()
  {
   nextSequence(); }, 1000);
  }
}
else
{
  var wrongAnswer = "wrong";
  console.log("wrong");
  playSound(wrongAnswer);

  $("body").addClass("game-over");

 setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
}
 }

