import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  id: string;
}

export default function BaseSection({
  children,
  title,
  id,
}: Props): JSX.Element {
  return (
    <section
      className="default-margin my-20 flex w-full flex-col items-center "
      id={id}>
      <h2 className="mb-14 text-5xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
