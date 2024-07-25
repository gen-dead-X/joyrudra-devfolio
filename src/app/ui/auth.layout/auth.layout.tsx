'use-client';

import { useEffect, type ReactNode } from 'react';
import './_auth.layout.scoped.scss';
import { useRouter } from 'next/navigation';
import BrandingBlob from '../blobs/branding.blob/branding.blob';

export default function SignInUpLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      <BrandingBlob />
      <div className="flex h-screen items-center justify-center px-10 sm:px-20">
        <div className="sign-in-banner fixed left-0 top-0 z-0 h-screen w-screen">
          <div className="sign-in-banner-gradient h-full w-full" />
        </div>
        {children}
      </div>
    </>
  );
}
