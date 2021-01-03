class Pig {
constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage('sprites/enemy.png');
    Worlds.add(world,this.body);
    this.visibility = 255; 
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    imageMode(CENTER);
    push();
    if(this.body.speed >= 5){
    this.visibility = this.visibility-1;
    tint(255,this.visibility);
     }
    translate(pos.x,pos.y);
    rotate(angle);
    fill('pink');
    image(this.image,0,0,this.width,this.height);
    pop();
}
score (){
    if(this.visibility < 250 && this.visibility > -500 && this.body.speed > 5){
        score = score+ 1 ;
    }
}
}