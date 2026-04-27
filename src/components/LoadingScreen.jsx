/* ============================================================
   LoadingScreen — "AJ" initials build particle-by-particle
   ============================================================ */
import React, { useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Draw "AJ" text offscreen to get pixel data
    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext('2d');
    const fontSize = Math.min(w * 0.25, 200);
    offCtx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
    offCtx.fillStyle = '#fff';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillText('AJ', w / 2, h / 2);

    const imageData = offCtx.getImageData(0, 0, w, h);
    const pixels = imageData.data;

    // Sample pixel positions where text exists
    const gap = 4;
    const targetPositions = [];
    for (let y = 0; y < h; y += gap) {
      for (let x = 0; x < w; x += gap) {
        const i = (y * w + x) * 4;
        if (pixels[i + 3] > 128) {
          targetPositions.push({ x, y });
        }
      }
    }

    // Create particles at random positions
    const particles = targetPositions.map((target) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      tx: target.x,
      ty: target.y,
      size: Math.random() * 2.5 + 1,
      speed: Math.random() * 0.04 + 0.02,
      progress: 0,
    }));

    let animFrame;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      let allDone = true;
      particles.forEach((p) => {
        if (p.progress < 1) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 1;
          allDone = false;
        }
        const ease = p.progress * p.progress * (3 - 2 * p.progress); // smoothstep
        const cx = p.x + (p.tx - p.x) * ease;
        const cy = p.y + (p.ty - p.y) * ease;

        const alpha = 0.4 + p.progress * 0.6;
        ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
        ctx.beginPath();
        ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!allDone) {
        animFrame = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="loading-screen">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LoadingScreen;
