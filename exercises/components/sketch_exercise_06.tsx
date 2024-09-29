"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const SketchExercise06: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        let img: p5.Image;

        p.setup = () => {
          p.createCanvas(4032, 3024, p.WEBGL);
          img = p.loadImage("/images/exercise_06/station.png");
          // img.resize(p.width, p.height);
        };

        p.draw = () => {
          p.background(255);
          p.fill(0);
          p.noStroke();

          let tiles = 100;
          let tileSize = p.width / tiles;

          p.push();
          // p.rotateY(p.radians(p.frameCount));
          p.translate(0, 0, -400);
          for (let x = 0; x < tiles; x++) {
            for (let y = 0; y < tiles; y++) {
              const c = img.get(x * tileSize, y * tileSize);
              const b = p.map(p.brightness(c), 0, 255, 1, 0);

              const z = p.map(b, 0, 1, -300, 300);

              p.push();
              p.translate(
                x * tileSize - p.width / 2,
                y * tileSize - p.height / 2,
                z
              );
              p.box((tileSize * b) / 2);
              p.pop();
            }
          }
          p.pop();
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

export default SketchExercise06;
