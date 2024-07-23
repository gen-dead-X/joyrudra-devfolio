import { type HTMLMotionProps, motion, type Variants } from "framer-motion";
import React from "react";

type Props = HTMLMotionProps<"span"> & {
  text: string;
  variants: Variants;
};

export default function StaggeringTextAnimation({
  text,
  variants,
  ...spanProps
}: Props) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span {...spanProps} variants={variants} key={index}>
          {letter}
        </motion.span>
      ))}
    </>
  );
}
