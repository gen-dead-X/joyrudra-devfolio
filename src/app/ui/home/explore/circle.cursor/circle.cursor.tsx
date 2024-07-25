import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CircleCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use useSpring to provide smooth animation transitions
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 40);
      y.set(event.clientY - 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="circle-cursor"
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        x: springX,
        y: springY,
      }}
    />
  );
}
