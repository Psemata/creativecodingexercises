"use client";

import React, { useEffect, useRef } from "react";
import p5 from "p5";

const CANVAS_SIZE = 500;
const IMAGE_COUNT = 4;
const QUADRANT_SIZE = CANVAS_SIZE / 2;

const SketchExercise05: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sketch: p5;
    if (typeof window !== "undefined") {
      sketch = new p5((p: p5) => {
        const images: p5.Image[] = [];
        const imageIndices = [
          [0, 0],
          [0, 0],
        ];

        const getQuadrant = (x: number, y: number) => ({
          x: Math.floor(x / QUADRANT_SIZE),
          y: Math.floor(y / QUADRANT_SIZE),
        });

        const loadImage = (index: number) =>
          p.loadImage(`/images/exercise_05/image_0${index + 1}.jpg`);

        p.preload = () => {
          images.push(
            ...Array(IMAGE_COUNT)
              .fill(null)
              .map((_, i) => loadImage(i))
          );
        };

        p.setup = () => {
          const canvas = p.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
          canvas.parent(sketchRef.current!);
          canvas.mouseReleased(handleMouseRelease);
          p.image(images[0], 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        };

        const handleMouseRelease = () => {
          const { x, y } = getQuadrant(p.mouseX, p.mouseY);

          imageIndices[x][y] = (imageIndices[x][y] + 1) % IMAGE_COUNT;

          p.image(
            images[imageIndices[x][y]].get(
              x * QUADRANT_SIZE,
              y * QUADRANT_SIZE,
              QUADRANT_SIZE,
              QUADRANT_SIZE
            ),
            x * QUADRANT_SIZE,
            y * QUADRANT_SIZE
          );
        };
      });
    }

    return () => {
      if (sketch) {
        sketch.remove();
      }
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default SketchExercise05;
