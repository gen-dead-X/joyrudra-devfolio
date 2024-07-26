// import React, { useEffect } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// export default function CircleCursor() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Use useSpring to provide smooth animation transitions
//   const springX = useSpring(x, { stiffness: 200, damping: 30 });
//   const springY = useSpring(y, { stiffness: 200, damping: 30 });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       x.set(event.clientX - 40);
//       y.set(event.clientY - 40);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [x, y]);

//   return (
//     <motion.div
//       className="circle-cursor"
//       transition={{
//         type: 'spring',
//         stiffness: 100,
//         damping: 20,
//       }}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         zIndex: '99',
//         width: '40px',
//         height: '40px',
//         borderRadius: '50%',
//         x: springX,
//         y: springY,
//       }}
//     />
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  targets: string;
};

export default function CircleCursor({ targets }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [intersecting, setIntersecting] = useState(false);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 40);
      y.set(event.clientY - 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  useEffect(() => {
    const checkIntersection = () => {
      if (!cursorRef.current) return;
      const cursorRect = cursorRef.current.getBoundingClientRect();
      const targetElements = document.querySelectorAll(targets);

      let isIntersecting = false;
      targetElements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        if (
          cursorRect.left < elementRect.right &&
          cursorRect.right > elementRect.left &&
          cursorRect.top < elementRect.bottom &&
          cursorRect.bottom > elementRect.top
        ) {
          isIntersecting = true;
        }
      });

      setIntersecting(isIntersecting);
    };

    checkIntersection();
    window.addEventListener('mousemove', checkIntersection);
    return () => window.removeEventListener('mousemove', checkIntersection);
  }, []);

  return (
    <motion.div
      className={`circle-cursor ${intersecting ? 'circle-cursor-interacting' : ''}`}
      ref={cursorRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        x: springX,
        y: springY,
      }}
      animate={{ scale: intersecting ? 1.5 : 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    />
  );
}
