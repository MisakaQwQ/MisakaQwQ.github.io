function Tube(){
    kind = random([1, 2, 3, 4])
    if(kind == 1) {
        this.img = particleA;
    }
    else if(kind == 2) {
        this.img = particleB;
    }
    else if(kind == 3) {
        this.img = particleC;
    }
    else if(kind == 4) {
        this.img = particleD;
    }
    this.size = random(5,15)
    this.x=random(30,80);
    this.y=random(120,250);
    this.vx = random(-0.5,0.5)
    this.vy = random(0,1)
    this.rot = 0
    this.vrot = random(-0.05, 0.05)

    this.update = function (){
        this.rot += this.vrot
        delta_rot = random(-0.001, 0.001)
        this.vrot += delta_rot
        this.vrot = Math.min(0.05,Math.max(-0.05,this.vx))

        delta_x = random(-0.03,0.03)
        delta_y = random(-0.5,0.5)
        this.x+=this.vx
        if(this.x >= 60) {
            if(this.x >= 65) {
                this.vx-=Math.abs(delta_x);
            }
            else{
                this.vx-=delta_x;
            }
        }
        else{
            if(this.x<=55)
            {
                this.vx+=Math.abs(delta_x);
            }
            else{
                this.vx+=delta_x
            }
        }
        this.vx = Math.min(0.8,Math.max(-0.8,this.vx))

        this.y-=this.vy
        this.vy+=delta_y
        if(this.y<=120) {
            this.size = random(5,15)
            this.y=265
        }
        this.vy = Math.min(1,Math.max(0,this.vy))
    }

    this.show = function (){
        tint(255,128)
        push()
        translate(this.x + this.size/2, this.y+this.size/2)
        rotate(this.rot)
        image(this.img, -this.size/2,-this.size/2, this.size, this.size)
        pop()
    }
}