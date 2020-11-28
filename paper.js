class Paper{

    constructor(){
        var options = {
            'restitution': 0.5,
            'friction': 0,
            'density': 0.09
        }

        this.image = loadImage("paperImg.png")

        this.body = Bodies.circle(425 , 400 , 70 , options);
	World.add(world, this.body);
    }
        display(){
            image(this.image,this.body.position.x,this.body.position.y,83,83)
            
     }
}