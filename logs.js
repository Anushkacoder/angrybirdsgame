class Log {
    constructor (x,y,width,angle){
       var options = {
          friction: 1,
          //density: 0.5
       }
    this.body = Bodies.rectangle(x,y,width,15,options);
    this.width = width;
    this.height = 15;
    Matter.Body.setAngle(this.body,angle);
    this.image = loadImage('sprites/wood2.png');
    Worlds.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       imageMode(CENTER);
       translate(pos.x,pos.y);
       rotate(angle);
       fill('blue');
       image(this.image,0,0, this.width, this.height);
       pop();
    }
 }