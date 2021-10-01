class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }

    show() {
        stroke(255);
        strokeWeight(50);
        point(this.x, this.y);
    }
}
