import { useCopyToClipboard } from '@hooks/useCopyToClipboard';

export default function CopyEmailButton(): JSX.Element {
  const [value, copy] = useCopyToClipboard();

  return (
    <>
      <a
        href="mailto:contato@flyrio.dev"
        onClick={() => copy('contato@flyrio.dev')}
        className="mt-10 max-w-sm self-center border-2 border-shadow p-3 transition hover:border-transparent hover:bg-highlight hover:text-foreground">
        contato@flyrio.dev
      </a>
    </>
  );
}
