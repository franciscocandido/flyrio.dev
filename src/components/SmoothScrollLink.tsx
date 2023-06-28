import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';

export interface SmoothScrollLinkProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export default function SmoothScrollLink({
  targetId,
  className,
  children,
}: SmoothScrollLinkProps): JSX.Element {
  const elementRef = useRef(document.getElementById(targetId));

  function handleClick(event: MouseEvent<HTMLElement>): void {
    event.preventDefault();

    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <a
      className={`${className} cursor-pointer font-spaceGrotesk font-bold text-foreground transition hover:text-shadow hover:underline`}
      href={`#${targetId}`}
      onClick={handleClick}>
      {children}
    </a>
  );
}
