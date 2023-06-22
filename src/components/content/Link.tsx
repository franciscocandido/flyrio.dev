import type { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export default function Link({ href, children }: Props): JSX.Element {
  return (
    <a className="text-highlight underline" href={href} target="_blank">
      {children}
    </a>
  );
}
