'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { TOKEN } from '@/shared/enums/global';
import Header from './ui/home/header/header';
import Explore from './ui/home/explore/explore';
import Explore3D from './ui/3d/explore3d/explore.3d';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(TOKEN.ACCESS_TOKEN)) {
      router.push('/sign-in');
    }
  }, []);

  return (
    <main className="snap-container">
      <Header />
      <Explore />
      <Explore3D />
    </main>
  );
}
