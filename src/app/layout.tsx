'use client';

import { Poppins } from 'next/font/google';
import './globals.scss';
import { UserContextProvider } from './context/user.content';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/helpers/api';
import { SnackbarProvider } from 'notistack';
import Navbar from './ui/navbar/navbar';

import Script from 'next/script';
import dynamic from 'next/dynamic';

const GoldenYellowBlob = dynamic(
  () => import('./ui/blobs/golden.yellow.blob'),
  {
    ssr: false,
  }
);

const inter = Poppins({
  weight: '400',
  subsets: ['latin'],
  fallback: ['Inter'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://aframe.io/releases/1.6.0/aframe.min.js" />
      <body className={inter.className}>
        <UserContextProvider>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider
              autoHideDuration={3000}
              maxSnack={3}
              className="p-5 text-2xl"
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
