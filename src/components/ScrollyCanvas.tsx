"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;
const SEQUENCE_DIR = "/sequence";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll progress through the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to image index (0-119)
  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `${SEQUENCE_DIR}/frame_${frameIndex}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoading(false);
          renderCanvas(0);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderCanvas = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const imgWidth = img.width;
    const imgHeight = img.height;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = windowWidth / windowHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = windowWidth;
      drawHeight = windowWidth / imgRatio;
      offsetX = 0;
      offsetY = (windowHeight - drawHeight) / 2;
    } else {
      drawWidth = windowHeight * imgRatio;
      drawHeight = windowHeight;
      offsetX = (windowWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, windowWidth, windowHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(imageIndex, "change", (latest) => {
    renderCanvas(latest);
  });

  useEffect(() => {
    const handleResize = () => renderCanvas(imageIndex.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="h-0.5 w-48 bg-white/10 overflow-hidden rounded-full">
                <div className="h-full bg-white animate-[loading_1.5s_ease-in-out_infinite]" />
              </div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
                Initializing Cinema
              </div>
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        {/* Subtle Vignette for cinematic feel */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,18,18,0.4)_100%)]" />
      </div>
    </div>
  );
}
