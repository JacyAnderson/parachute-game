//GAMEPAGE JS/JQUERY

//Establish variables for both players
var playerOne = ".playerOne";
var playerTwo = ".playerTwo";

var playerOneLeft = 0;
var playerOneRight = 0;

var moveLeft = 5;

// var canvas = $('.canvasBoard'),
//   ctx = canvas.getContext('2d');

//   function draw() {
//     var c = document.querySelector('canvasBoard');
//     console.log(c);
//     if (c.getContext) {
//       var ctx = c.getContext('2d');

//       ctx.beginPath();
//       ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
//       ctx.moveTo(110, 75);
//       ctx.arc(75, 75, 35, 0, Math.PI, false);
//       ctx.moveTo(65, 65);
//       ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
//       ctx.moveTo(95, 65);
//       ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
//       ctx.stroke();
//     }  
//   }
// draw();




/*
/ GRAVITY
/ Simulates gravity on both players
*/
$(".players").click(function gravity(){
    $(".players").animate({top: '590px'}, 30000);
}); 

// Function to move playerOne
$(document).keypress(function movePlayerOne(e) {
  console.log(e.keyCode);
  
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
      console.log('the "a" key pressed');
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
      console.log('the "d" key pressed');
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
      console.log('the "left arrow" key pressed');
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
      console.log('the "right arrow" key pressed');
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
  console.log(randomTop);
  $('<div>Rocket</div>').appendTo(".gameboard").attr('id', 'rocketLeft-' + rocketNum).addClass('rocketLeft');
  $("#rocketLeft-" + rocketNum).css({top: randomTop});
  $("#rocketLeft-" + rocketNum).animate({left: '1300px'}, rocketSpeed);
  rocketNum++
}

function rocketsRight(){
  var randomTop = Math.floor((Math.random() * 500) + 65);
  console.log(randomTop);
  $('<div>Rocket</div>').appendTo(".gameboard").attr('id', 'rocketRight-' + rocketNum).addClass('rocketRight');
  $("#rocketRight-" + rocketNum).css({top: randomTop});
  $("#rocketRight-" + rocketNum).animate({right: '1300px'}, rocketSpeed);
  rocketNum++
}

$('.players').click(function fireRocket() {
  window.setInterval(function() {
    rocketsLeft();
    rocketsRight();
  }, 3000);
});

/*
/ Write function that checks for collision between divs
/
*/
function collision(playerOne, playerTwo) {
  var x1 = $('.playerOne').offset().left;
  var y1 = $('.playerOne').offset().top;
  var x2 = $('.playerTwo').offset().left;
  var y2 = $('.playerTwo').offset().top;
  console.log(x1);
  console.log(y1);
  console.log(x2);
  console.log(y2);
  if ((y1 + $('.playerOne').outerHeight(true)) < y2 ||
    y1 > (y2 + $('.playerTwo').outerHeight(true))  ||
    (x1 + $('.playerOne').outerWidth(true)) < x2 ||
    x1 > (x2 + $('.playerTwo').outerWidth(true))) 
    console.log(false);
  else {
    console.log(true);
  }
}
collision();