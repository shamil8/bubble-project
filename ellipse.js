class Ellipse extends Particle {
    constructor(x, y) {
        super(x, y);
    }

    show(x1, y1) {
        stroke(140);
        strokeWeight(25);
        ellipse(mouseX, mouseY, x1, y1);
    }

    draw(x1 = 60, y1 = 60) {
        if (mouseIsPressed) {
            fill(0);
        } else {
            fill(255);
        }

        this.show(x1, y1)
    }
}
