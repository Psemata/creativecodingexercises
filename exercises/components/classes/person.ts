import p5 from "p5";

export default class Person {
  p: p5;
  position: p5.Vector | null = null;
  velocity: p5.Vector | null = null;
  stepX: number[];
  stepY: number[];
  xOffset: number;
  yOffset: number;

  constructor(p: p5, stepX: number[], stepY: number[]) {
    this.p = p;
    this.setup(stepX, stepY);
    this.stepX = stepX;
    this.stepY = stepY;
    this.xOffset = stepX[1];
    this.yOffset = stepY[1];
  }

  setup(stepX: number[], stepY: number[]) {
    if (this.p.random() < 0.5) {
      this.position = this.p.createVector(0, this.p.random(stepY));
      this.velocity = this.p.createVector(0, 1);
    } else {
      this.position = this.p.createVector(this.p.random(stepX), 0);
      this.velocity = this.p.createVector(1, 0);
    }
  }

  createVelocity() {
    const speed = this.p.floor(this.p.random(5));

    const directions = [
      this.p.createVector(speed, 0),
      this.p.createVector(0, speed),
      this.p.createVector(-speed, 0),
      this.p.createVector(0, -speed),
    ];

    return this.p.random(directions);
  }

  show() {
    this.p.stroke(0);
    this.p.strokeWeight(3);
    this.p.point(this.position!.x, this.position!.y);
  }

  update() {
    this.position!.add(this.velocity!);
    if (
      this.position!.x % this.xOffset == 0 &&
      this.position!.y % this.yOffset == 0
    ) {
      this.velocity = this.createVelocity();
    }

    if (this.position!.x >= this.p.width || this.position!.y >= this.p.height) {
      this.setup(this.stepX, this.stepY);
    }
  }
}
