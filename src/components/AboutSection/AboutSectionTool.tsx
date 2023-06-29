import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface AboutSectionToolProps {
  children: ReactNode;
  href?: string;
  inlineText: string;
}

export default function AboutSectionTool({
  children,
  href,
  inlineText,
}: AboutSectionToolProps): JSX.Element {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <a
        href={href}
        className="flex cursor-default flex-row items-center gap-x-2 font-spaceGrotesk font-bold transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight">
        {children} <p>{inlineText}</p>
      </a>
    </IconContext.Provider>
  );
}
