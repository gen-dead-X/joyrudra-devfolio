'use client';

import Header from './ui/home/header/header';
import Explore from './ui/home/explore/explore';
import Explore3D from './ui/3d/explore3d/explore.3d';

export default function Home() {
  return (
    <main className="snap-container">
      <Header />
      <Explore />
      <Explore3D />
    </main>
  );
}
