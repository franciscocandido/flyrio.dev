import { useRef } from 'react';

export default function Footer(): JSX.Element {
  const actualYear = useRef(new Date().getFullYear());

  return (
    <div className="flex h-28 w-full items-center justify-center font-spaceGrotesk font-bold text-shadow">
      Copyright {actualYear.current} Francisco Cândido
    </div>
  );
}
