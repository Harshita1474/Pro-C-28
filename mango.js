class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius = 20;
      this.image=loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, 50,50);
    }
  };