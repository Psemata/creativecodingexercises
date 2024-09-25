"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const SketchExercise02: React.FC = () => {
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

              if (random_number < 0.25) {
                p.arc(x, y + tilesize, tilesize, tilesize, -p.HALF_PI, 0);
                p.arc(x + tilesize, y, tilesize, tilesize, p.HALF_PI, p.PI);
              } else if (random_number > 0.25 && random_number < 0.5) {
                p.arc(
                  x + tilesize / 2,
                  y + tilesize / 2,
                  tilesize,
                  tilesize,
                  -p.HALF_PI,
                  0
                );
                p.arc(
                  x + tilesize / 2,
                  y + tilesize / 2,
                  tilesize,
                  tilesize,
                  p.HALF_PI,
                  p.PI
                );
              } else if (random_number > 0.5 && random_number < 0.75) {
                p.arc(
                  x + tilesize / 2,
                  y + tilesize / 2,
                  tilesize,
                  tilesize,
                  0,
                  p.HALF_PI
                );
                p.arc(
                  x + tilesize / 2,
                  y + tilesize / 2,
                  tilesize,
                  tilesize,
                  p.PI,
                  -p.HALF_PI
                );
              } else {
                p.arc(x, y, tilesize, tilesize, 0, p.HALF_PI);
                p.arc(
                  x + tilesize,
                  y + tilesize,
                  tilesize,
                  tilesize,
                  p.PI,
                  -p.HALF_PI
                );
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

export default SketchExercise02;
