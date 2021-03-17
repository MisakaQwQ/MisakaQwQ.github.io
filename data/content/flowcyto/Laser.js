function Laser() {
    this.alpha=0;
    this.easing=2;

    this.update=function () {
        if(this.alpha < 255) {
            this.alpha += this.easing
            this.alpha = Math.min(this.alpha, 255)
        }
    }

    this.show=function () {
        tint(255, this.alpha)
        image(beam_blue, 60,277);
    }
}