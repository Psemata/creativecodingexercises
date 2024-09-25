"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const SketchExercise01: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        const tilesize = 50;

        p.setup = () => {
          p.createCanvas(500, 500);
        };

        p.draw = () => {
          p.background(255);

          for (let x = 0; x < p.width; x += tilesize) {
            for (let y = 0; y < p.height; y += tilesize) {
              const random_number = Math.random();

              if (random_number < 0.5) {
                p.line(x, y, tilesize + x, tilesize + y);
              } else {
                p.line(x, tilesize + y, tilesize + x, y);
              }
            }
          }
          p.noLoop();
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

export default SketchExercise01;
