"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { TOKEN } from "@/shared/enums/global";
import GoldenYellowBlob from "./ui/blobs/golden.yellow.blob";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <header className="hero h-[300vh] mt-28">
      {/* Blob */}
      <GoldenYellowBlob />

      <div className="flex flex-col justify-center items-center gap-10 header-text">
        <p className="text-2xl uppercase lg:text-4xl font-bold">Welcome To</p>
        <h1 className="text-8xl uppercase lg:text-[12rem] xl:text-[16rem] font-bold">
          Paradise
        </h1>
      </div>
    </header>
  );
}
