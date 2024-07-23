"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { TOKEN } from "@/shared/enums/global";
import GoldenYellowBlob from "./ui/blobs/golden.yellow.blob";

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
      stiffness: 500,
      damping: 30,
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
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const router = useRouter();
  const headerText = "Paradise";

  useEffect(() => {
    if (!localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <header className="hero flex flex-col gap-10 h-[100vh] relative z-[2] overflow-hidden justify-center">
      {/* Blob */}
      <GoldenYellowBlob />

      <div className="flex flex-col justify-center items-center gap-10 header-text relative z-10">
        <p className="text-2xl uppercase lg:text-4xl font-bold">Welcome To</p>

        <motion.h1
          className="text-8xl uppercase lg:text-[12rem] xl:text-[16rem] font-bold"
          variants={containerVariants}
        >
          {headerText.split("").map((letter) => {
            return (
              <motion.span key={crypto.randomUUID()} variants={popInVariants}>
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>

      <motion.img
        src="./blobs/greenish_blob.png"
        className="md:absolute top-0 left-0 w-full aspect-square"
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
