const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var backgroundImg, slingshotImg;
var snowflakes = [];
var state = "";
var score = 0;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  
}

function setup() {
  var canvas = createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
      snowman = new Snowman(600,370);   
      snowball = new Snowball(860, 150);
      slingshot = new Slingshot(snowball.body, {x: 860, y:300});
      sling = new Sling();
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount % 70 === 0){
    snowflakes.push(new Snow());
  }

  for(n = 0; n < snowflakes.length; n = n +1){
    snowflakes[n].display();
  }
  

    snowman.display();
    snowball.display();
    sling.display();

    fill("white");
    stroke(5);
    textSize(15);
    text("NOTE- There is a magical barrier protecting the magical houses so you must aim the floating snowball high to collect them.", 35, 580);

    fill("white");
    stroke(5);
    textSize(20);
    text("Press space to get the snowball back", 35, 530);
  //text("Score: " + score, 500, 20);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(snowball.body);
    Matter.Body.setPosition(snowball.body, {x: 860, y:150});

  }
}
