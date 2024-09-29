"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";
import Particle from "./classes/particle";

const SketchExercise04: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        let particles: Particle[] = [];
        const quantity = 1000;

        const noiseScale = 0.01;

        p.setup = () => {
          p.createCanvas(500, 500);
          for (let i = 0; i < quantity; i++) {
            particles.push(new Particle(p));
          }
        };

        p.draw = () => {
          p.background(0, 10);

          for (let i = 0; i < quantity; i++) {
            let v = particles[i];

            v.noiseMove(noiseScale);
            v.update();
            v.show();

            if (!v.onScreen()) {
              v.reset();
            }
          }
        };
      }, sketchRef.current!);
    }

    return () => {
      if (sketch) {
        sketch.remove();
      }
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default SketchExercise04;
