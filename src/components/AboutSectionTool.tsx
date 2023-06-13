import type { ReactNode } from 'react';

interface Props {
  name: string;
  link: string;
  children: ReactNode;
}

export default function AboutSectionTool({
  name,
  link,
  children,
}: Props): JSX.Element {
  return (
    <a target="_blank" href={link}>
      <div className="flex cursor-pointer flex-row items-center gap-x-2 transition hover:-translate-y-0.5 hover:text-highlight">
        {children}
        <p className="text-lg">{name}</p>
      </div>
    </a>
  );
}
