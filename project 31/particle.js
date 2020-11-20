class Particles {
    constructor(x,y,r) {
this.x = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,this.r);
this.color = color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}