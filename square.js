class Confetti extends Particle {
    constructor(x, y, r = 10) {
        super(x, y);
        this.bright = random(255);
        this.r = r;
    }

    update() {
        super.update();
        this.r += random(-2, 2);
    }

    show() {
        strokeWeight(10);
        stroke(255);
        fill(this.bright);
        square(this.x, this.y, this.r);
    }
}
