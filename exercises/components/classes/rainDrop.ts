import p5 from "p5";

export default class RainDrop {
  x: number;
  y: number;
  speed: number;
  wait: number;
  wait_max: number;
  length: number;
  width: number;
  p: p5;

  constructor(p: p5) {
    this.p = p;
    this.x = this.p.random(0, this.p.width);
    this.y = this.p.random(-3, 1);
    this.speed = this.p.random(10, 15);
    this.wait = 0;
    this.wait_max = this.p.random(80, 100);
    this.length = this.p.random(10, 15);
    this.width = this.p.random(5, 10);
  }

  show() {
    this.p.fill(206, 199, 197);
    this.p.noStroke();
    this.p.rect(this.x, this.y, this.width, this.length);
  }

  fall() {
    if (this.wait < this.wait_max) {
      this.wait += this.speed;
      this.length = this.p.random(10, 15);
      this.width = this.p.random(5, 10);
      return;
    }

    this.y += this.speed;
    if (this.y > this.p.height) {
        this.y = this.p.random(-3, 1);
      this.wait = 0;
    }
  }
}
