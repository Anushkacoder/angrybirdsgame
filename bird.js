class Bird extends Box {
    constructor (x,y){
        super(x,y,40,40);
        this.image = loadImage('sprites/bird.png');
        this.image1 = loadImage('sprites/smoke.png');
        this.trajectory = [];
    }
    display(){
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        super.display();
    }
}