import type { ElementType } from 'react';
export interface ContactSectionLinkProps {
  icon: ElementType;
  href: string;
  name: string;
}

export default function ContactSectionLink({
  icon: Icon,
  href,
  name,
}: ContactSectionLinkProps): JSX.Element {
  return (
    <a
      className="transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight"
      aria-label={name}
      href={href}>
      <Icon size="30px" />
    </a>
  );
}
