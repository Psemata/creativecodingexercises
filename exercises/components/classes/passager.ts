import p5 from "p5";

export default class Passager {
  p: p5;

  position: p5.Vector;
  target: p5.Vector;

  velocity: p5.Vector;
  acceleration: p5.Vector;

  noiseOffsetX: number;
  noiseOffsetY: number;

  constructor(p5: p5, start: p5.Vector, end: p5.Vector) {
    this.p = p5;
    this.position = start.copy();
    this.target = end.copy();
    this.velocity = p5.createVector(0, 0);
    this.acceleration = p5.createVector(0, 0);
    this.noiseOffsetX = p5.random(1000);
    this.noiseOffsetY = p5.random(1000);
  }

  update() {
    // Utiliser le bruit de Perlin pour créer un mouvement plus naturel
    const noiseX = this.p.map(this.p.noise(this.noiseOffsetX), 0, 1, -1, 1);
    const noiseY = this.p.map(this.p.noise(this.noiseOffsetY), 0, 1, -1, 1);

    // Créer un vecteur de direction vers la cible
    const dir = p5.Vector.sub(this.target, this.position);
    dir.normalize();
    dir.mult(0.5); // Ajuster la force de l'attraction vers la cible

    // Ajouter le bruit au vecteur de direction
    dir.add(noiseX * 0.8, noiseY * 0.8);

    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.p.random(0.5, 1.3)); // Limiter la vitesse maximale
    this.position.add(this.velocity);

    this.noiseOffsetX += 1;
    this.noiseOffsetY += 1;
    this.p.randomSeed(this.noiseOffsetX);
  }

  show() {
    this.p.fill(255);
    this.p.ellipse(this.position.x, this.position.y, 5, 5);
  }

  arrived() {
    return (
      this.p.dist(
        this.position.x,
        this.position.y,
        this.target.x,
        this.target.y
      ) < 5
    );
  }
}
