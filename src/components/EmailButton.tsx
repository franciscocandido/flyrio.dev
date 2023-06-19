export default function CopyEmailButton(): JSX.Element {
  return (
    <>
      <a
        href="mailto:contato@flyrio.dev"
        className="mt-10 max-w-sm self-center border-2 border-shadow p-3 font-spaceGrotesk font-bold text-shadow transition hover:border-transparent hover:bg-highlight hover:text-foreground">
        contato@flyrio.dev
      </a>
    </>
  );
}
