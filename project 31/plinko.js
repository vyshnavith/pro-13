class Plinko {
    constructor(x,y,r) {
this.x = x;
this.y = y;
this.r = r;
var options = {
    isStatic: true,
    restitution: 1
}
this.body = Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("brown");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}