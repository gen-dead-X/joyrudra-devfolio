import type { HTMLAttributes } from 'react';
import './_submit.button.scoped.scss';

export default function SubmitButtonDefault({
  ...divProps
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...divProps}
      className={`submit-popup-button ${divProps.className}`}
    />
  );
}
