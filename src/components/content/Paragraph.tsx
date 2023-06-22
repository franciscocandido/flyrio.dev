import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Paragraph({ children }: Props): JSX.Element {
  return <p className="py-3">{children}</p>;
}
