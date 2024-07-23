"use client";

import { Poppins } from "next/font/google";
import "./globals.scss";
import { UserContextProvider } from "./context/user.content";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/helpers/api";
import { SnackbarProvider } from "notistack";
import Navbar from "./ui/navbar/navbar";
import GoldenYellowBlob from "./ui/blobs/golden.yellow.blob";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider
              autoHideDuration={3000}
              maxSnack={3}
              className="text-2xl p-5"
            >
              <Navbar />
              <GoldenYellowBlob />
              {children}
            </SnackbarProvider>
          </QueryClientProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
