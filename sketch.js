var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
//var Constraint = Matter.Constraint;
// var sling;
var engine;
var world;
var backgroundimage;
var score = 0;
// var slinga,slingb,slingc,smoke
function preload(){
backgroundimage = loadImage('background.jpg');
backgrounda();
}
function setup(){
    canvas = createCanvas(1200,500);
    canvas.position(80,80);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(600, 380, 50, 50);
    box2 = new Box(700, 380, 50, 50);
    log1 = new Log(650, 330, 200, 0);
    box3 = new Box(600, 320, 50, 50);
    box4 = new Box(700, 320, 50, 50);
    log2 = new Log(650, 170, 200, 0);
    box6 = new Box(650, 160, 50, 50);
    
    pig1 = new Pig(650,380,40,40);
    pig2 = new Pig(650,320,40,40);
    log3 = new Log(670, 160, 100, PI/4);
    log4 = new Log(630, 160, 100, -PI/4);
    ground = new Ground(width/2,450,width,70);
    platform = new Ground(50,320,300,250);
    bird = new Bird(100,100);
    Matter.Body.setDensity(bird.body,10);
   // log5 = new Log(150,100,100,0);
    slingShot = new Constraint1(bird.body,{x:150 , y:60});
//     var options = {
//         bodyA: bird.body,
//         bodyB: log5.body,
//         length: 70,
//         stiffness: 0.04
//     };
//     sling = Constraint.create(options);
//     Worlds.add(world,sling);
 }
function draw(){
    // background('yellow');
    //background(backgroundimage);
    if(backgroundimage!= null){
        imageMode(CENTER);
        image(backgroundimage,width/2,height/2,width,height);
    }
    Engine.update(engine);
  //  strokeWeight(4);
   // line(sling.bodyA.position.x,sling.bodyA.position.y,sling.bodyB.position.x,sling.bodyB.position.y);
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box6.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    log3.display();
    log4.display();
    ground.display();
    platform.display();
    bird.display();
   // log5.display();
    slingShot.display();
    textSize(20);
    fill('white');
    text("SCORE: "+ score, width-200, 70);
    if(slingShot.sling.bodyA == null && bird.body.velocity.x > 10){
    var pos = bird.body.position;
    var position = [pos.x,pos.y];
    bird.trajectory.push(position);
    }
    for(var i = 0; i <= bird.trajectory.length-1; i = i + 2){
        image(bird.image1,bird.trajectory[i][0],bird.trajectory[i][1]);
    }
}
    function mouseDragged (){
        Matter.Body.setPosition(bird.body,{x : mouseX, y : mouseY});
    }
    function mouseReleased (){
        slingShot.fly();
    }
    async function backgrounda(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        // console.log(response);
        var JSONresponse = await response.json();
        // console.log(JSONresponse);
        var datetime =  await JSONresponse.datetime;
        // console.log(datetime);
        var hour = await datetime.slice(11,13);
        console.log(hour);
        if(hour > 18){
        backgroundimage = await loadImage('sprites/bg2.jpg');
        }
        else {
            backgroundimage = await loadImage('background.jpg'); 
        }
    }