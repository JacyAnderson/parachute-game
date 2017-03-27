//GAMEPAGE JS/JQUERY

//Establish variables for both players
var playerOne = ".playerOne";
var playerTwo = ".playerTwo";

var playerOneLeft = 0;
var playerOneRight = 0;

var moveLeft = 5;

//Simulates gravity on both players
$(".players").click(function gravity(){
    $(".players").animate({top: '590px'}, 40000);
}); 

//Function to move playerOne
$(document).keypress(function movePlayerOne(e) {
  console.log(e.keyCode);
  
  //Checks for keys pressed by player one
  switch (e.keyCode) {

  	//"a" key
    case 97: {
      function leftPressed(){
 	    $('.playerOne').css({
 	      left: $('.playerOne').position().left - 10 + "px"
 	    })
      }
      leftPressed();
      console.log('the "a" key pressed');
      break;
    }

    //"d" key
    case 100: {
      function rightPressed(){
 	    $('.playerOne').css({
 	      left: $('.playerOne').position().left + 10 + "px"
 	    })
      }
      rightPressed();
      console.log('the "d" key pressed');
      break;
    }
  }
});

//Function to move playerTwo
$(document).keypress(function movePlayerTwo(e) {
  
  //Checks for keys pressed by player one
  switch (e.keyCode) {

  	//"j" key
    case 106: {
      function leftPressed(){
 	    $('.playerTwo').css({
 	      left: $('.playerTwo').position().left - 10 + "px"
 	    })
      }
      leftPressed();
      console.log('the "left arrow" key pressed');
      break;
    }

    //"l" key
    case 108: {
      function rightPressed(){
 	    $('.playerTwo').css({
 	      left: $('.playerTwo').position().left + 10 + "px"
 	    })
      }
      rightPressed();
      console.log('the "right arrow" key pressed');
      break;
    }
  }
});