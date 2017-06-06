// GAMEPAGE JS/JQUERY

// Establish variables for both players
var playerOne = ".playerOne";
var playerTwo = ".playerTwo";

// Plane distance from left
var planeLeft = $('.plane').css("left");

// Is game over?
var gameOver = false;

// Are players alive?
var playerOneAlive = true;
var playerTwoAlive = true;

var theme = $('#theme');
theme.volume = -10;

var iniTimeout = 6500;
var gravityTime = 30000;
var rocketTime = 3000;
var checkRocketPos = 400;

// // Play theme
$(document).ready(function() {
    $('#ambient').get(0).play();
});


// Calls plane to drop troops
$('#playBtn').click(function plane() {
  $('#planeAudio').get(0).play();
  setTimeout(gravity, iniTimeout);
  setTimeout(fireRocket, iniTimeout);
  $(".plane").animate({right: '1600px'}, 15000, function() {
    $(this).remove();
  });
});

/*
/ GRAVITY
/ Simulates gravity on both players, and at end of animation runs win condition.
*/
function gravity(){
    $('.players').css('-webkit-animation', 'zoomInSlideIn 1s 1');
    $('.players').fadeIn();
    $(".players").animate({
      top: '565px'
    }, {
      duration: gravityTime,

      //Checks if game has been won and creates "win" message
      complete: function () {
        if (gameOver === false) {
          messageBoard();
          $('.messageBoard').css("background-color", "#99773D");
          console.log(gameOver);
          $('<h2>Mission Accomplished</h2>').appendTo('.messageBoard');
          $('<p>\"The first man stepped up to the open door. All the men had been ordered to look out at the horizon, not straight down, for obvious psychological reasons.\"</p>').appendTo('.messageBoard');
          $('<p><span>Stephen E. Ambrose - Band of Brothers<span></p>').appendTo('.messageBoard').addClass('quote');
          $('<button>Play Again</button>').appendTo('.messageBoard').attr('id', 'playAgain').addClass('button reloadButton');
          $('#playAgain').click(function(){
            location.reload();
          });
          gameOver = true;
        }
    }
  })
}

// When Play Button is clicked, button fades out
$('#playBtn').click( function(){
  $('#playBtn').fadeOut(1500);
});


// Triggers lose message on player death
function loser() {
  if (gameOver === false) {
     messageBoard();
    $('.messageBoard').css("background-color", "grey");
    $('<h2>Trooper Lost</h2>').appendTo('.messageBoard');
    $('<p>\"It was close; but that\'s the way it is in war. You win or lose, live or die, and the difference is just an eyelash.\"</p>').appendTo('.messageBoard');
    $('<p><span>General Douglas MacArthur<span></p>').appendTo('.messageBoard').addClass('quote');
    $('<button>Try Again</button>').appendTo('.messageBoard').attr('id','tryAgain').addClass('button');
    $('#tryAgain').click(function(){
      location.reload();
    });
    console.log(gameOver);

    gameOver = true;
  }
}

// Creates win/lose message board when called
function messageBoard() {
  $('<div></div>').appendTo('.gameboard').addClass('messageBoard');
}

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
// Creates rockets on left side of screen and launches them across the gameboard
function rocketsLeft(){
  var randomTop = Math.floor((Math.random() * 450) + 80);
  $('<div></div>').appendTo(".gameboard").attr('id', 'rocketLeft-' + rocketNum).addClass('rocketLeft rocket');
  // $('#rocketLeft-' + rocketNum).css('background', 'url(images/rocketRight.png)');
  $("#rocketLeft-" + rocketNum).css({top: randomTop});
  $("#rocketLeft-" + rocketNum).animate({left: '1300px'}, rocketSpeed, function(){
    $(this).remove();
  });
  rocketNum++
}

// Creates rockets on left side of screen and launches them across the gameboard
function rocketsRight(){
  var randomTop = Math.floor((Math.random() * 480) + 60);
  $('<div></div>').appendTo(".gameboard").attr('id', 'rocketRight-' + rocketNum).addClass('rocketRight rocket');
  $("#rocketRight-" + rocketNum).css({top: randomTop});
  $("#rocketRight-" + rocketNum).animate({right: '1300px'}, rocketSpeed, function() {
    $(this).remove();
  });
  rocketNum++
}


// Fires rockets from both sides at set interval
function fireRocket() {
  window.setInterval(function() {
    rocketsLeft();
    rocketsRight();
  }, rocketTime);
};
// time should be 3000



/*
/ get & store rockets position in sensible way 
/ delete rockets once off screen 
/ check collision detection for rockets on screen
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
    if (playerOneAlive === true && (y1 + $('.playerOne').outerHeight(true)) < y3 ||
      y1 > (y3 + $(this).outerHeight(true))  ||
      (x1 + $('.playerOne').outerWidth(true)) < x3 ||
      x1 > (x3 + $(this).outerWidth(true))) {
        // console.log(false);
    } else {
      $('#explosion').get(0).play();
      playerOneAlive = false;
      playerOneDead();
      $(this).stop();
      $(this).css('background-image', "url('images/explosion.gif')");
      $(this).css('height','80px');
      $(this).delay(715).fadeOut();
      // $(this).css('background-position', 'center');
      // $(this).remove();
      console.log(true + " player one blew up");
    }
    if (playerTwoAlive = true && (y2 + $('.playerTwo').outerHeight(true)) < y3 ||
      y2 > (y3 + $(this).outerHeight(true))  ||
      (x2 + $('.playerTwo').outerWidth(true)) < x3 ||
      x2 > (x3 + $(this).outerWidth(true))) {

    } else {
      $('#explosion').get(0).play();
      playerTwoAlive =  false;
      playerTwoDead();
      $(this).stop();
      $(this).css('background-image', "url('images/explosion.gif')");
      $(this).css('height','80px');
      $(this).delay(715).fadeOut();
      console.log(true + " player two blew up");
    }
  });
}  

// Removes player one from gameboard
function playerOneDead() {
  $('.playerOne').remove();
  loser();
}

//removes player two from gameboard
function playerTwoDead() {
  $('.playerTwo').remove();
  loser();
}

// Checks for rocket collision in set intervals
setInterval(function() {
  rocketPosition();
}, checkRocketPos);

 
// Write function that checks for collision between players
function collision(playerOne, playerTwo) {
  var x1 = $('.playerOne').offset().left;
  var y1 = $('.playerOne').offset().top;
  var x2 = $('.playerTwo').offset().left;
  var y2 = $('.playerTwo').offset().top;
  // console.log(x1 + "is player one's x coordinate");
  // console.log(y1 + "is player one's y coordinate");
  // console.log(x2 + "is player two's x coordinate");
  // console.log(y2 + "is player two's y coordinate");
  if (playerOneAlive===true && playerTwoAlive===true &&(y1 + $('.playerOne').outerHeight(true)) < y2 ||
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



