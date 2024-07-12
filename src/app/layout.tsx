"use client";

// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { UserContextProvider } from "./context/user.content";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/helpers/api";
import { SnackbarProvider } from "notistack";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter"],
});

// export const metadata: Metadata = {
//   title: "NestJS Demo",
//   description: "A Test App to be integrated with nestJS",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider autoHideDuration={3000}>
            <body className={inter.className}>{children}</body>
          </SnackbarProvider>
        </QueryClientProvider>
      </UserContextProvider>
    </html>
  );
}
