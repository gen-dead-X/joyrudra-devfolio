"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { TOKEN } from "@/shared/enums/global";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <header className="hero h-screen">
      <motion.img
        className="h-[20rem] w-[20rem] cursor-grab active:cursor-grabbing absolute"
        drag
        draggable
        dragConstraints={{
          left: 0,
          top: 0,
          right: window.innerWidth - 300,
          bottom: window.innerHeight - 400,
        }}
        src="./blobs/shape_blob.png"
        alt="blob"
      />

      <div className="flex flex-col justify-center items-center gap-10 header-text">
        <p className="text-2xl uppercase lg:text-4xl font-bold">Welcome To</p>
        <h1 className="text-8xl uppercase lg:text-[12rem] xl:text-[16rem] font-bold">
          Paradise
        </h1>
      </div>
    </header>
  );
}
