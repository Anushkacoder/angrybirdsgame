class Ground {
    constructor (x,y,width,height){
    var options = {
      isStatic : true
    };
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage('sprites/base.png');
    Worlds.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        push();
        fill('green');
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}