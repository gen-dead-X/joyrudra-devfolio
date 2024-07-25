import React, { useEffect, useRef } from 'react';
import './_branding.blob.scss';

export default function BrandingBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleBlob(e: MouseEvent) {
      if (!blobRef.current) {
        return;
      }

      blobRef.current.animate(
        { left: `${e.clientX - 100}px`, top: `${e.clientY - 100}px` },
        { duration: 5000, fill: 'forwards' }
      );
    }

    document.addEventListener('mousemove', handleBlob);

    () => document.removeEventListener('mousemove', handleBlob);
  }, []);

  return (
    <div ref={blobRef} className={'auth-branding'}>
      <h4 className="text-3xl font-extrabold">{`ME.DEV :)`}</h4>
    </div>
  );
}
