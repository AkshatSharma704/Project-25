class Dustbin{
        constructor(x,y,r)
        {
            this.image = loadImage("DustbiN.png");
            this.x = x;
            this.y = y;
            this.angle = 0;
            this.r = r;

            var options = {
                isStatic: true
            }
            this.boxBottom = Bodies.rectangle(this.x, this.y, 200, 20, {isStatic: true} ); 
            World.add(world,this.boxBottom);
            
            this.boxLeft = Bodies.rectangle(this.x - 100, this.y - 50, 20, 20, {isStatic: true} );
            Matter.Body.setAngle(this.boxLeft, this.angle); 
            World.add(world,this.boxLeft);
        
            this.boxRight = Bodies.rectangle(this.x + 100, this.y - 50, 20, 20, {isStatic: true} );
            Matter.Body.setAngle(this.boxRight, -1*this.angle); 
            World.add(world,this.boxRight);
        }

    display()
    {
        push();
        translate(this.boxLeft.position.x,this.boxLeft.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(this.angle);
        rect(0,0,20,20); 
        pop();

        push();
        translate(this.boxRight.position.x,this.boxRight.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,20,20); 
        pop();

        push();
        translate(this.boxBottom.position.x,this.boxBottom.position.y);
        imageMode(CENTER);
        stroke(255);
        fill(255);
        image(this.image,0,0,this.r);
        pop();

    }
}