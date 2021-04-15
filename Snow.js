class Snow{
    constructor(x,y,radius)
    {
        var options={
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body)
    }
    display()
    {
        ellipseMode(CENTER);
        fill("white");
        stroke("white");
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}