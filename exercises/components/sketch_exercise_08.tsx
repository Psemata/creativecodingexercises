"use client";

import p5 from "p5";
import React, { useEffect, useRef } from "react";
import Passager from "./classes/passager";

const SketchExercise08: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        const passagers: Passager[] = [];

        p.setup = () => {
          p.createCanvas(500, 500);
          // Créer quelques passagers
          for (let i = 0; i < 100; i++) {
            const start = p.createVector(0, p.random(p.height));
            const end = p.createVector(p.width, p.random(p.height));
            passagers.push(new Passager(p, start, end));
          }
        };

        p.draw = () => {
          p.background(0);
          passagers.forEach((passager) => {
            passager.update();
            passager.show();
            if (passager.arrived()) {
              // Donner une nouvelle destination au passager
              passager.position = p.createVector(0, p.random(p.height));
              passager.target = p.createVector(p.width, p.random(p.height));
            }
          });
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

export default SketchExercise08;
