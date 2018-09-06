function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  // the player variable
  var Player = 180;
  
  //Balls' speed
  var Ballspeed = 5;
  
  // Variables for the ball
  var Ballx = 200;
  var Bally = 200;
  
  // velocity veriables
  var Velx = 0;
  var Vely = 0;
  Velx = random( -Ballspeed/2 , Ballspeed/2);
  Vely = Ballspeed - sqrt(sq(Velx));
  
  var relativeIntersectY;
  var normalizedRelativeIntersectionY;
  var bounceAngle;
  
  // brick variables 
  
  var brickRowCount = 4;
  var brickColumnCount = 6;
  var brickWidth = 57;
  var brickHeight = 22;
  var brickPadding = 8;
  var brickOffsetTop = 6;
  var brickOffsetLeft = 8;
  
  var score = 0;
  
  var bricks = [];
  for(var c=0; c<brickColumnCount; c++) {
      bricks[c] = [];
      for(var r=0; r<brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1  };
      }
  }
  
  
  
  
  var draw = function() {
      background(135, 135, 135);
      
      var drawScore = function() {
          fill(0, 255, 51);
          textSize(49);
          text("Score: "+score, 20, 101);
      };
      
      
      var collisionDetection = function() {
          for(var c=0; c<brickColumnCount; c++) {
              for(var r=0; r<brickRowCount; r++) {
                  var b = bricks[c][r];
                  if(b.status ===1 ){
                  if(Ballx > b.x && Ballx < b.x+brickWidth && Bally > b.y && Bally < b.y+brickHeight) { 
                      Vely = -Vely;
                      b.status = 0;
                      score++;
                      if(score === brickRowCount*brickColumnCount) {
                          text("YOU WIN, CONGRATULATIONS!", 200 , 200);
                      }
                  }
              }
              }
          }
      };
      
      collisionDetection();
      
      var drawBricks = function() {
      for(var c=0; c<brickColumnCount; c++) {
          for(var r=0; r<brickRowCount; r++) {
              if(bricks[c][r].status === 1) {
                  var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                  var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                  bricks[c][r].x = brickX;
                  bricks[c][r].y = brickY;
                  fill(255, 0, 0);
                  rect(brickX, brickY, brickWidth, brickHeight);
                  
              }
          }
      }
  };
      drawBricks();
      
      drawScore();
      
      //ball movement
      Ballx = Ballx + Velx;
      Bally = Bally + Vely;
      
      
      //drawing the ball and the player
      fill(0, 0, 0);
      ellipse(Ballx, Bally, 10, 10);
      fill(255, 255, 255);
      rect( Player , 350, 40, 5);
      
      
      //wall bounces
      if ( Ballx <= 5 || Ballx >= 395 ) {
          Velx = -Velx;
      } else if ( Bally <= 5) {
          Vely = -Vely;
      }
      
      if ( keyCode === LEFT && keyIsPressed ) {
          Player = Player - 10;
      } else if ( keyCode === RIGHT && keyIsPressed ) {
          Player = Player + 10;
      } else {
          Player = Player ;
      }
      
      // its 10 pm and im going to start the ball & bar bounced
      relativeIntersectY = (Player +(40/2)) - Ballx;
      normalizedRelativeIntersectionY = (relativeIntersectY/(40/2));
      bounceAngle = normalizedRelativeIntersectionY * 75;
      
      if ( Bally >= 345 ) {
          Vely = Ballspeed * cos(bounceAngle);
          Velx = Ballspeed * -sin(bounceAngle);
      }
      // its 11:30 and its very glitchy ill take this 
  };
  

}
