class Paper{
    constructor(x,y,radius){
var Paper_options={
  isStatic:false,
  restiution:0.3,
  friction:0.5,
  density:1.2,
        }
   this.body=Bodies.circle(x,y,radius,Paper_options);
   this.radius=radius;
   World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        fill("red");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
};