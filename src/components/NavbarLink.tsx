import type { ReactNode } from 'react';
import useScrollToElement from '@hooks/useScrollToElement';

interface Props {
  targetSection: string;
  children: ReactNode;
}

export default function NavbarLink({ children, targetSection }: Props) {
  const scrollTo = useScrollToElement;
  return (
    <button
      onClick={() => {
        scrollTo(targetSection);
      }}
      className="text-right font-spaceGrotesk text-sm font-bold transition hover:text-shadow md:text-center md:text-base">
      {children}
    </button>
  );
}
