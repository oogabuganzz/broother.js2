let ball;


function setup() {
  // Set up the canvas
  new Canvas(400, 600);
  background(250); //background color

  // Basic shape testing
  // write your codes here
  noStroke();
  ball = new Sprite();
  ball.y = 50;
  ball.x = 50;
  ball.diameter = 50;
  ball.color = "red";
  ball.vel.y = 5;
  ball.vel.x = 5;
  // End Basic shape testing;
  square = new Sprite(100,500,150,10);
  square.color = "blue";
  yes = new Sprite(150,500,50,10);
  yes2 = new Sprite(300,300,50,40);
  square2 = new Sprite(150,200,30,30);
  square3= new Sprite(120,270,20,70);
  square4= new Sprite(220,370,70,70);
  square5= new Sprite(10,270,10,400);
   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // write your codes here
  background(250);
  textSize(16);
  text("ball:"+round(ball.x)+","+round(ball.y),20,50);

  if (ball.y>600 - ball.diameter/2|| ball.y < 0 + ball.diameter/2){
    ball.vel.y = -1 * ball.vel.y;
  }
  if (ball.x>400 - ball.diameter/2|| ball.x < 0 + ball.diameter/2){
    ball.vel.x = -1 * ball.vel.x;
  }
  fill(100,200,1)
  ellipse(200,200,300,100)
  rect(100,150,50,100)
}
