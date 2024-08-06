'use client';

import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
// import './page.scss';

const commonClass =
  'h-[calc(100vh-1.25rem*2)] sticky top-5 flex justify-center items-center text-6xl rounded-xl text-white snap-section-sub';

const colors = [
  'bg-blue-400',
  'bg-pink-400',
  'bg-amber-400',
  'bg-lime-400',
  'bg-fuchsia-400',
  'bg-sky-400',
];

export default function Page() {
  return (
    <div className="snap-container-sub flex flex-col gap-20 p-5">
      {colors.map((color, index) => {
        const parentContainerRef = useRef<HTMLDivElement>(null);

        const isInView = useInView(parentContainerRef, {
          amount: 'all',
          once: true,
        });

        useEffect(() => {
          console.log(`${isInView ? 'IN VIEW' : 'OUT OF VIEW'}`);
        }, [isInView]);

        return (
          <div
            ref={parentContainerRef}
            key={color}
            className={`${commonClass} ${color}`}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
