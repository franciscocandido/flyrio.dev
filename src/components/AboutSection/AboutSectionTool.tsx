import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface AboutSectionToolProps {
  children: ReactNode;
  inlineText: string;
}

export default function AboutSectionTool({
  children,
  inlineText,
}: AboutSectionToolProps): JSX.Element {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <div className="flex cursor-default flex-row items-center gap-x-2 font-spaceGrotesk font-bold transition hover:-translate-y-0.5 hover:text-highlight">
        {children} <p>{inlineText}</p>
      </div>
    </IconContext.Provider>
  );
}
