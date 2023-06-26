import { useRef } from 'react';

export default function Footer(): JSX.Element {
  const currentYear = useRef(new Date().getFullYear());

  return (
    <div className="flex h-28 w-full items-center justify-center font-spaceGrotesk font-bold text-shadow">
      Copyright {currentYear.current} Francisco Cândido
    </div>
  );
}
