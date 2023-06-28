import { useRef } from 'react';

export default function Footer(): JSX.Element {
  const currentYear = useRef(new Date().getFullYear());

  return (
    <footer className="flex h-28 w-full items-center justify-center font-spaceGrotesk font-bold text-shadow">
      Copyright 2023-{currentYear.current} Francisco Cândido
    </footer>
  );
}
