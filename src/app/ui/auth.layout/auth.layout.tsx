"use-client";

import type { ReactNode } from "react";
import "./_auth.layout.scoped.scss";
import tailwindEnum from "@/shared/enums/tailwind.enum";

export default function SignInUpLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="lg:flex">
      <div className={`h-screen p-5 lg:w-4/6 ${tailwindEnum.flexCenter}`}>
        <div className="xl:w-[80%] min-[1640px]:w-[60%]">{children}</div>
      </div>
      <div className="sign-in-banner lg:w-2/6 " />
    </div>
  );
}
