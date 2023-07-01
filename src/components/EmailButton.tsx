export default function CopyEmailButton(): JSX.Element {
  return (
    <>
      <a
        href="mailto:contato@flyrio.dev"
        className="mt-10 max-w-sm self-center rounded border-2 border-shadow p-3 font-spaceGrotesk font-bold text-paragraph transition hover:border-highlight hover:bg-highlight hover:text-foreground">
        contato@flyrio.dev
      </a>
    </>
  );
}
