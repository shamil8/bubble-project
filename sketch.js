let p1, p2, p3;
function setup() {
    createCanvas(600, 600);
    p1 = new Particle(300, 300);
    pCircle = new Particle(180, 180);
    p2 = new Confetti(300, 300, 20);
    p3 = new Ellipse(150, 150);
}

function draw() {
    background(0);
    p1.update();
    p1.show();

    pCircle.update();
    pCircle.show();

    p2.update();
    p2.show();

    p3.update();
    p3.draw()

}
