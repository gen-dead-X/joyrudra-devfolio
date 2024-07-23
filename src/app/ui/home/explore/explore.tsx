import { motion, useInView, type Variants } from "framer-motion";
import React, { useRef } from "react";

import "./_explore.module.scss";
import { antonio, roboto_slab } from "@/app/fonts/fonts";
import StaggeringTextAnimation from "../../global/animated.text/staggering.text.animation";

const popInVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
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
      type: "ease-in",
      stiffness: 300,
      damping: 20,
    },
    letterSpacing: "2px",
  },
};

export default function Explore() {
  const firstName = "Joyrudra";
  const lastName = "Biswas";
  const containerRef = useRef<HTMLDivElement>(null);

  const isContainerView = useInView(containerRef, { amount: 0.5, once: true });

  return (
    <div
      ref={containerRef}
      id="#explore"
      className="snap-section pt-28 p-5 flex flex-col gap-10 items-center relative z-10"
    >
      <div className={`flex flex-col w-full gap-20 ${antonio.className}`}>
        <motion.p
          initial={"hidden"}
          animate={isContainerView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.05 }}
          className="text-4xl"
        >
          <StaggeringTextAnimation
            text={"Myself"}
            className="inline-block"
            variants={myselfVariation}
          />
        </motion.p>

        <h2
          className={`${roboto_slab.className} flex flex-col items-center gap-5 text-7xl uppercase md:text-[6rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem] font-bold`}
        >
          <motion.p
            initial={"hidden"}
            animate={isContainerView ? "visible" : "hidden"}
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
            animate={isContainerView ? "visible" : "hidden"}
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
