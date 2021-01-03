class Constraint1{
    constructor(x,y){
        var options = {
            bodyA: x,
            pointB: y,
            length: 10,
            stiffness: 0.04
        };
        this.sling = Matter.Constraint.create(options);
        this.image = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
        Worlds.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA!= null){
        var body1 = this.sling.bodyA.position;
        var point2 = this.sling.pointB;
        strokeWeight(4)
        line(body1.x,body1.y,point2.x+30,point2.y+10);
        line(body1.x,body1.y,point2.x-30,point2.y+10);
        image(this.image2,body1.x-15,body1.y);
        }
        image(this.image,170,120,50,150);
        image(this.image1,140,90,50,100);
    }
} 