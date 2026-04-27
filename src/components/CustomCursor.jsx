/* ============================================================
   CustomCursor — Indigo glow cursor with trail
   ============================================================ */
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + 'px';
        cursorRef.current.style.top = e.clientY - 10 + 'px';
      }
      if (trailRef.current) {
        setTimeout(() => {
          if (trailRef.current) {
            trailRef.current.style.left = e.clientX - 4 + 'px';
            trailRef.current.style.top = e.clientY - 4 + 'px';
          }
        }, 80);
      }
    };

    const handleOver = (e) => {
      if (e.target.closest('a, button, .glass-card, .btn, input, textarea, select')) {
        setHovering(true);
      }
    };
    const handleOut = () => setHovering(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${hovering ? 'hovering' : ''}`} />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};

export default CustomCursor;
