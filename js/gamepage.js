//GAMEPAGE JS/JQUERY

//Establish variables for both players
var playerOne = ".playerOne";
var playerTwo = ".playerTwo";

var playerOneLeft = 0;
var playerOneRight = 0;

var moveLeft = 5;

/*
/ GRAVITY
/ Simulates gravity on both players
*/
$(".players").click(function gravity(){
    $(".players").animate({top: '590px'}, 30000);
}); 

// Function to move playerOne
$(document).keypress(function movePlayerOne(e) {
  // console.log(e.keyCode);
  
  // Checks for keys pressed by player one
  switch (e.keyCode) {

  	// "a" key
    case 97: {
      function leftPressed(){
 	    $('.playerOne').css({
 	      left: $('.playerOne').position().left - 30 + "px"
 	    })
      }
      leftPressed();
      // console.log('the "a" key pressed');
      collision();
      break;
    }

    // "d" key
    case 100: {
      function rightPressed(){
 	    $('.playerOne').css({
 	      left: $('.playerOne').position().left + 30 + "px"
 	    })
      }
      rightPressed();
      // console.log('the "d" key pressed');
      collision();
      break;
    }
  }
});

// Function to move playerTwo
$(document).keypress(function movePlayerTwo(e) {
  
  //Checks for keys pressed by player two
  switch (e.keyCode) {

  	// "j" key
    case 106: {
      function leftPressed(){
 	    $('.playerTwo').css({
 	      left: $('.playerTwo').position().left - 30 + "px"
 	    })
      }
      leftPressed();
      // console.log('the "j" key pressed');
      var result = collision();
      break;
    }

    // "l" key
    case 108: {
      function rightPressed(){
 	    $('.playerTwo').css({
 	      left: $('.playerTwo').position().left + 30 + "px"
 	    })
      }
      rightPressed();
      // console.log('the "l" key pressed');
      collision();
      break;
    }
  }
});

// Sets initial rocket speed
var rocketSpeed = 13000;
var rocketNum = 1;
// Creates rockets and launches them across the screen
function rocketsLeft(){
  var randomTop = Math.floor((Math.random() * 500) + 65);
  $('<div>Rocket</div>').appendTo(".gameboard").attr('id', 'rocketLeft-' + rocketNum).addClass('rocketLeft rocket');
  $("#rocketLeft-" + rocketNum).css({top: randomTop});
  $("#rocketLeft-" + rocketNum).animate({left: '1300px'}, rocketSpeed);
  rocketNum++
}

function rocketsRight(){
  var randomTop = Math.floor((Math.random() * 500) + 65);
  $('<div>Rocket</div>').appendTo(".gameboard").attr('id', 'rocketRight-' + rocketNum).addClass('rocketRight rocket');
  $("#rocketRight-" + rocketNum).css({top: randomTop});
  $("#rocketRight-" + rocketNum).animate({right: '1300px'}, rocketSpeed);
  rocketNum++
}

$('.players').click(function fireRocket() {
  window.setInterval(function() {
    rocketsLeft();
    rocketsRight();
    rocketPosition();
  }, 3000);
});
// time should be 3000


/*
/ get & store rockets position in sensible way 
/ delete rockets once off screen 
/ check collision detection for rockets on screen

console log this to see if it's firing what we want
*/
function rocketPosition() {
  $('.rocket').each( function() {
    var x1 = $('.playerOne').position().left;
    var y1 = $('.playerOne').position().top;
    var x2 = $('.playerTwo').position().left;
    var y2 = $('.playerTwo').position().top;
    var x3 = $(this).position().left;
    var y3 = $(this).position().top;
    // console.log("hello");
    // console.log(this);
    if ((y1 + $('.playerOne').outerHeight(true)) < y3 ||
      y1 > (y3 + $(this).outerHeight(true))  ||
      (x1 + $('.playerOne').outerWidth(true)) < x3 ||
      x1 > (x3 + $(this).outerWidth(true))) {
        // console.log(false);
    }else {
      console.log(true + " player one blew up");
      return true;
      console.log('Boom!')
    }
    if ((y2 + $('.playerTwo').outerHeight(true)) < y3 ||
      y2 > (y3 + $(this).outerHeight(true))  ||
      (x2 + $('.playerTwo').outerWidth(true)) < x3 ||
      x2 > (x3 + $(this).outerWidth(true))) {

    }else{
      console.log(true + " player two blew up");
    }
  });
}  

setInterval(function() {
  rocketPosition();
}, 400);
    // var rocketPos = $(this).position();
    // console.log(rocketPos);


    
    // console.log(this + " is hopefully the rocket");
    // console.log(x3 + " this should be the rocket's left");
    // console.log(y3 + " this should be the rocket's top");
    // if ((y1 + $('.playerOne').outerHeight(true)) < y3 ||
    //   y1 > (y3 + $(this).outerHeight(true))  ||
    //   (x1 + $('.playerOne').outerWidth(true)) < x3 ||
    //   x1 > (x3 + $(this).outerWidth(true)) && 
    //   (y2 + $('.playerTwo').outerHeight(true)) < y3 ||
    //   y2 > (y3 + $(this).outerHeight(true))  ||
    //   (x2 + $('.playerTwo').outerWidth(true)) < x3 ||
    //   x2 > (x3 + $(this).outerWidth(true))) {
    //   // return false;
    //   console.log(false + "player has not been hit")
    // } else { 
    //   // return true;
    //   console.log(true + "player has been hit");
    //   alert('player has been hit');
    // }

    // if ($('.playerOne').position().right < $(this).position().left ||
    //     $('.playerOne').position().left > $(this).position().right ||
    //     $('.playerOne').position().bottom < $(this).position().top||
    //     $('.playerOne').position().top > $(this).position().bottom) {
    //     alert("player has been hit");
    // }
    // console.log(this);
  // var x1 = $('.playerOne').position().left;
  // var y1 = $('.playerOne').position().top;
  // var x2 = $('.playerTwo').position().left;
  // var y2 = $('.playerTwo').position().top;
  // var x3 = $(this).position().left;
  // var y3 = $(this).position().top;

  // if ((y1 + $('.playerOne').outerHeight(true)) < y3 ||
  //     y1 > (y3 + $(this).outerHeight(true))  ||
  //     (x1 + $('.playerOne').outerWidth(true)) < x3 ||
  //     x1 > (x3 + $(this).outerWidth(true))) {
  //       // console.log(false);
  //       alert("collision");
  //     } else{
  //       alert("collision");
  //     }
 

// Write function that checks for collision between divs
function collision(playerOne, playerTwo) {
  var x1 = $('.playerOne').offset().left;
  var y1 = $('.playerOne').offset().top;
  var x2 = $('.playerTwo').offset().left;
  var y2 = $('.playerTwo').offset().top;
  // console.log(x1 + "is player one's x coordinate");
  // console.log(y1 + "is player one's y coordinate");
  // console.log(x2 + "is player two's x coordinate");
  // console.log(y2 + "is player two's y coordinate");
  if ((y1 + $('.playerOne').outerHeight(true)) < y2 ||
    y1 > (y2 + $('.playerTwo').outerHeight(true))  ||
    (x1 + $('.playerOne').outerWidth(true)) < x2 ||
    x1 > (x2 + $('.playerTwo').outerWidth(true))) {
    // console.log(false);
  }else {
    // console.log(true);
    $('.playerOne').css({
        left: $('.playerOne').position().left - 30 + "px"
      })
    $('.playerTwo').css({
        right: $('.playerTwo').position().right - 30 + "px"
      })
  }
}
