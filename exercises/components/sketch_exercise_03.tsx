"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";
import RainDrop from "./classes/rainDrop";

const SketchExercise03: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;

    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        let raindrops: RainDrop[] = [];
        const raindropsCount = 20;

        p.setup = () => {
          p.createCanvas(500, 500);
          for (let i = 0; i < raindropsCount; i++) {
            raindrops.push(new RainDrop(p));
          }
        };

        p.draw = () => {
          p.background(235);

          for (let raindrop of raindrops) {
            raindrop.fall();
            raindrop.show();
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

export default SketchExercise03;
