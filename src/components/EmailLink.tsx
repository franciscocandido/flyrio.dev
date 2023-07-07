import { useState } from 'react';
import useClipboard from '@hooks/useClipboard';

interface EmailLinkProps {
  email?: string;
}

export default function EmailLinkProps({
  email = 'contato@flyrio.dev',
}: EmailLinkProps): JSX.Element {
  const [isOnHover, setIsOnHover] = useState<boolean>(false);
  const { copyToClipboard, hasCopied } = useClipboard({ timeout: 1000 });

  return (
    <>
      <a
        onClick={() => copyToClipboard(email)}
        onMouseEnter={() => setIsOnHover(true)}
        onMouseLeave={() => setIsOnHover(false)}
        href={`mailto:${email}`}
        className="mt-10 min-w-[300px] self-center rounded border-2 border-highlight p-3 text-center font-spaceGrotesk font-bold text-paragraph transition hover:border-highlight hover:bg-highlight hover:text-foreground">
        {hasCopied ? 'Copiado!' : isOnHover ? 'Clique para copiar.' : email}
      </a>
    </>
  );
}
