"use client";

import p5 from "p5";
import React, { useEffect, useRef } from "react";
import Person from "./classes/person";

const SketchExercise07: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        let xOffset = 0;
        let yOffset = 0;

        const stepX: number[] = [];
        const stepY: number[] = [];

        const persons: Person[] = [];

        p.setup = () => {
          p.createCanvas(500, 500);
          xOffset = p.width / 10;
          yOffset = p.height / 10;

          for (let x = 0; x < p.width; x += xOffset) {
            stepX.push(x);
          }

          for (let y = 0; y < p.height; y += yOffset) {
            stepY.push(y);
          }

          for (let personI = 0; personI < 100; personI++) {
            persons.push(new Person(p, stepX, stepY));
          }
        };

        p.draw = () => {
          p.background(255, 10);

          for (const person of persons) {
            person.show();
            person.update();
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

export default SketchExercise07;
