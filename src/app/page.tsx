"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { TOKEN } from "@/shared/enums/global";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
      router.push("/sign-in");
    }
  }, []);

  return <div className="h-[200vh]">Home</div>;
}
