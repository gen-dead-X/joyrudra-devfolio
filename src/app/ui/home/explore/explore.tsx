import { motion, useInView, type Variants } from 'framer-motion';
import React, { useRef } from 'react';

import './explore.scss';
import { roboto_slab } from '@/app/fonts/fonts';
import StaggeringTextAnimation from '../../global/animated.text/staggering.text.animation';

const popInVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const myselfVariation: Variants = {
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

export default function Explore() {
  const firstName = 'Joyrudra';
  const lastName = 'Biswas';
  const containerRef = useRef<HTMLDivElement>(null);

  const isContainerView = useInView(containerRef, { amount: 0.5, once: true });

  return (
    <div
      ref={containerRef}
      id="explore"
      className="snap-section relative z-0 flex flex-col items-center gap-10 p-5 pt-28"
    >
      <div className="explore-bg absolute left-0 top-0 z-[2] h-full w-full" />

      <div
        className={
          'absolute z-[10] flex h-full w-full flex-col items-center gap-10'
        }
      >
        <motion.p
          initial={'hidden'}
          animate={isContainerView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.05 }}
          className="text-4xl"
        >
          <StaggeringTextAnimation
            text={'MYSELF'}
            className="inline-block"
            variants={myselfVariation}
          />
        </motion.p>

        <h2
          className={`${roboto_slab.className} flex flex-col items-center gap-5 text-7xl font-bold uppercase md:text-[6rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem]`}
        >
          <motion.p
            initial={'hidden'}
            animate={isContainerView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.05 }}
          >
            <StaggeringTextAnimation
              text={firstName}
              className="inline-block"
              variants={popInVariants}
            />
          </motion.p>

          <motion.p
            initial="hidden"
            animate={isContainerView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.05, delayChildren: 1 }}
          >
            <StaggeringTextAnimation
              text={lastName}
              className="inline-block"
              variants={popInVariants}
            />
          </motion.p>
        </h2>
      </div>
    </div>
  );
}
