import type { ReactNode } from 'react';

export interface ContactSectionLinkProps {
  children: ReactNode;
  href: string;
  name: string;
}

export default function ContactSectionLink({
  children,
  href,
  name,
}: ContactSectionLinkProps): JSX.Element {
  return (
    <a
      className="transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight"
      aria-label={name}
      href={href}>
      {children}
    </a>
  );
}
