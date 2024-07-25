'use client';

import { motion } from 'framer-motion';
import BrandingBlob from '../../blobs/branding.blob/branding.blob';

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

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function Header() {
  const headerText = 'Paradise';

  return (
    <header className="snap-section hero relative z-[2] flex h-[100vh] flex-col justify-center gap-10 overflow-y-visible">
      <BrandingBlob />

      {/* Background */}
      <div className="explore-bg absolute left-0 h-screen w-screen" />

      <div className="header-text relative z-10 flex flex-col items-center justify-center gap-10">
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-2xl font-bold uppercase lg:text-4xl"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 1 }}
          className="text-8xl font-bold uppercase lg:text-[12rem] xl:text-[16rem]"
        >
          {headerText.split('').map(letter => {
            return (
              <motion.span variants={popInVariants} key={crypto.randomUUID()}>
                {letter}
              </motion.span>
            );
          })}
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
