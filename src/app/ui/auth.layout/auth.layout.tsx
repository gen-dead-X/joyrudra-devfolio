"use-client";

import type { ReactNode } from "react";
import "./_auth.layout.scoped.scss";
import tailwindEnum from "@/shared/enums/tailwind.enum";

export default function SignInUpLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex justify-center h-screen items-center px-10 sm:px-20 ">
      <div className="sign-in-banner top-0 left-0 fixed z-0 h-screen w-screen">
        <div className="sign-in-banner-gradient h-full w-full" />
      </div>
      {children}
    </div>
  );
}
