class Dustbin{
    constructor() {
        var options = {
            isStatic: true,
        }
        this.dustbinbottom= Bodies.rectangle(1400,630,200,20,options);
    	this.dustbinleft= Bodies.rectangle(1300,515,20,230,options);
      this.dustbinright = Bodies.rectangle(1500,515,20,230,options);
      this.image = loadImage("dustbingreen.png")
      
       
        World.add(world, this.dustbinbottom);
        World.add(world, this.dustbinleft);
        World.add(world, this.dustbinright);
      }
      display(){
        
        rectMode(CENTER);
        fill("white");
        rect(this.dustbinbottom.position.x,this.dustbinbottom.position.y,200,20);
        rect(this.dustbinleft.position.x,this.dustbinleft.position.y,20,230);
        rect(this.dustbinright.position.x,this.dustbinright.position.y,20,230);
        image(this.image,1275,390,250,260)
        
      }
}