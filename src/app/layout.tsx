import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter"],
});

export const metadata: Metadata = {
  title: "NestJS Demo",
  description: "A Test App to be integrated with nestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
