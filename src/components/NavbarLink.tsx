import type { ReactNode } from 'react';
import useScrollIntoView from '@hooks/useScrollIntoView';

interface Props {
  targetSection: string;
  children: ReactNode;
}

export default function NavbarLink({
  children,
  targetSection,
}: Props): JSX.Element {
  const scrollToSection = useScrollIntoView(targetSection, {
    behavior: 'smooth',
  });

  return (
    <button
      onClick={scrollToSection}
      className="text-right font-spaceGrotesk text-sm font-bold transition hover:text-shadow md:text-center md:text-base">
      {children}
    </button>
  );
}
