import useClipboard from '@hooks/useClipboard';

interface EmailLinkProps {
  email?: string;
}

export default function EmailLinkProps({
  email = 'contato@flyrio.dev',
}: EmailLinkProps): JSX.Element {
  const { copyToClipboard, hasCopied } = useClipboard({ timeout: 1000 });

  return (
    <>
      <a
        onClick={() => copyToClipboard(email)}
        href={`mailto:${email}`}
        className="mt-10 self-center rounded border-2 border-shadow p-3 font-spaceGrotesk font-bold text-paragraph transition hover:border-highlight hover:bg-highlight hover:text-foreground">
        {hasCopied ? 'Copiado!' : email}
      </a>
    </>
  );
}
