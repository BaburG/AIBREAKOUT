function setup() {
  createCanvas(400, 400);
}

//frameRate(30);


var sheight = 100;


// the player variable
var Player = 180;

//Balls' speed
var Ballspeed = 5;

// Variables for the ball
var Ballx = 200;
var Bally = sheight;

// velocity veriables
var Velx = 0;
var Vely = 0;
Velx = random((-Ballspeed/2),(Ballspeed/2));
Vely = Ballspeed - sqrt(sq(Velx));

var relativeIntersectY;
var normalizedRelativeIntersectionY;
var bounceAngle;

var s = 0;



function draw() {
  s =sqrt(sq(Vely));
    
    
    background(135, 135, 135);

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
    Player = constrain(Player, 0, 360);
    
    // its 10 pm and im going to start the ball & bar bounced
    relativeIntersectY = (Player +(40/2)) - Ballx;
    normalizedRelativeIntersectionY = (relativeIntersectY/(40/2));
    bounceAngle = normalizedRelativeIntersectionY * 75;
    
    if ( Bally >= 345 && Bally <= 350  && Ballx >= Player && Ballx <= (Player + 40)) {
        Vely = Ballspeed * -cos(bounceAngle);
        Velx = Ballspeed * -sin(bounceAngle);
        
    }
    // its 11:30 and its very glitchy ill take this 
    
    if ( Bally > 400 ) {
        Ballx = 200;
        Bally = sheight;
        Velx = random((-Ballspeed/2),(Ballspeed/2));
        Vely = Ballspeed - sqrt(sq(Velx));

        
    }
    
    Ballx = constrain(Ballx, 5, 395);
    
  
}
