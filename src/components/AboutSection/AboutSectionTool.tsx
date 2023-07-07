import type { ElementType } from 'react';
import { IconContext } from 'react-icons';

export interface AboutSectionToolProps {
  icon: ElementType;
  href?: string;
  inlineText: string;
}

export default function AboutSectionTool({
  icon: Icon,
  href,
  inlineText,
}: AboutSectionToolProps): JSX.Element {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <a
        href={href}
        target="_blank"
        className="flex cursor-default flex-row items-center gap-x-2 font-spaceGrotesk font-bold transition hover:-translate-y-0.5 hover:cursor-pointer hover:text-highlight">
        <Icon /> <p>{inlineText}</p>
      </a>
    </IconContext.Provider>
  );
}
