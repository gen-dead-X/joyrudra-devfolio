'use client';

import { motion, useInView } from 'framer-motion';
import BrandingBlob from '../../blobs/branding.blob/branding.blob';
import StaggeringTextAnimation from '../../global/animated.text/staggering.text.animation';
import { useRef } from 'react';
import { roboto_slab } from '@/app/fonts/fonts';

const popInVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: 0.5,
    },
  },
};

const myselfVariation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'ease-in',
      stiffness: 300,
      damping: 20,
    },
    letterSpacing: '2px',
  },
};

export default function Header() {
  const headerText = 'DEVFOLIO';
  const containerRef = useRef<HTMLDivElement>(null);

  const isContainerView = useInView(containerRef, { amount: 0.5, once: true });

  return (
    <header
      ref={containerRef}
      className={`snap-section hero relative z-[2] flex h-[100vh] flex-col justify-center gap-10 overflow-y-visible ${roboto_slab.className}`}
    >
      <BrandingBlob />

      {/* Background */}
      <div className="explore-bg absolute top-0 h-[200vh] w-[200vw]" />

      <div className="header-text relative z-10 flex flex-col items-center justify-center gap-10">
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-2xl font-bold uppercase lg:text-4xl"
        >
          Welcome To
        </motion.p>

        <p className="font-bold">MY</p>

        <motion.h1
          initial="hidden"
          animate={isContainerView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.05 }}
          className="text-8xl font-bold uppercase lg:text-[12rem] xl:text-[16rem]"
        >
          <StaggeringTextAnimation
            className="inline-block"
            variants={myselfVariation}
            text={headerText}
          />
        </motion.h1>
      </div>

      <motion.img
        src="./blobs/reddish_blob.png"
        className="left-0 top-0 z-[4] aspect-square w-full md:absolute"
        alt="green_blob"
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: 'linear',
        }}
      />
    </header>
  );
}
