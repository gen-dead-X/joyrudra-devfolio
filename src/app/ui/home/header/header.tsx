"use client";

import { motion } from "framer-motion";

const popInVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
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
  const headerText = "Paradise";

  return (
    <header className="snap-section hero flex flex-col gap-10 h-[100vh] relative z-[2] overflow-y-visible justify-center">
      <div className="flex flex-col justify-center items-center gap-10 header-text relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-2xl uppercase lg:text-4xl font-bold"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 1 }}
          className="text-8xl uppercase lg:text-[12rem] xl:text-[16rem] font-bold opacity-70"
        >
          {headerText.split("").map((letter) => {
            return (
              <motion.span variants={popInVariants} key={crypto.randomUUID()}>
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>

      <motion.img
        src="./blobs/greenish_blob.png"
        className="md:absolute z-[4] top-0 left-0 w-full aspect-square"
        alt="green_blob"
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      />
    </header>
  );
}
