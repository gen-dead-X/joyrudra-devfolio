import React from 'react';
import { motion } from 'framer-motion';

export default function GoldenYellowBlob() {
  const { innerHeight, innerWidth } = window as Window;

  return (
    <motion.img
      className="absolute z-[11] h-[20rem] w-[20rem] cursor-grab active:cursor-grabbing"
      drag
      dragConstraints={{
        left: 0,
        top: 0,
        right: innerWidth - 300,
        bottom: innerHeight - 300,
      }}
      draggable
      dragElastic={1}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      whileDrag={{
        scale: 0.8,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      src="./blobs/shape_blob.png"
      alt="blob"
    />
  );
}
