import type { ReactNode } from 'react';

export interface ContactSectionLinkProps {
  children: ReactNode;
  href: string;
}

export default function ContactSectionLink({
  children,
  href,
}: ContactSectionLinkProps): JSX.Element {
  return (
    <a
      className="transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight"
      href={href}>
      {children}
    </a>
  );
}
