class Box {
   constructor (x,y,width,height){
   this.body = Bodies.rectangle(x,y,width,height);
   this.width = width;
   this.height = height;
   this.image = loadImage('sprites/wood1.png');
   Worlds.add(world,this.body);
   }
   display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      imageMode(CENTER);
      translate(pos.x,pos.y);
      rotate(angle);
      fill('brown');
      image(this.image,0,0, this.width, this.height);
      pop();
   }
}