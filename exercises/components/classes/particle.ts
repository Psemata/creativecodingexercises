import p5 from "p5";

export default class Particle {
  p: p5;

  position: p5.Vector;
  velocity: p5.Vector;

  max_speed: number;

  constructor(p: p5) {
    this.p = p;

    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(0, 0);

    this.max_speed = 10;
  }

  update() {
    this.velocity.limit(this.max_speed);
    this.position.add(this.velocity);
  }

  noiseMove(noiseScale: number) {
    let n = this.p.noise(
      this.position.x * noiseScale,
      this.position.y * noiseScale
    );
    let a = this.p.TAU * n;

    this.velocity.x = this.p.cos(a);
    this.velocity.y = this.p.sin(a);
  }

  onScreen() {
    return (
      this.position.x >= 0 &&
      this.position.x <= this.p.width &&
      this.position.y >= 0 &&
      this.position.y <= this.p.height
    );
  }

  reset() {
    this.position.x = this.p.random(this.p.width);
    this.position.y = this.p.random(this.p.height);
  }

  show() {
    this.p.stroke(
      this.p.round(this.p.millis() * 0.01) % 255,
      this.p.round(this.p.millis() * 0.02) % 255,
      this.p.round(this.p.millis() * 0.03) % 255
    );
    this.p.point(this.position.x, this.position.y);
  }
}
