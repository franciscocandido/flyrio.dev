import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

export interface LinkProps {
  content: string;
  name: string;
  href?: string;
  className?: string;
  children?: ReactElement<IconType>;
}

export default function Link({
  content,
  name,
  href,
  className,
  children,
}: LinkProps): JSX.Element {
  return (
    <span className="my-2 flex items-center gap-1 font-medium transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight hover:underline">
      {children}
      <a href={href} aria-label={name} className={`${className}`}>
        {content}
      </a>
    </span>
  );
}
