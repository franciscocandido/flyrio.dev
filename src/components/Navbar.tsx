import SmoothScrollLink from '@components/SmoothScrollLink';

export default function Navbar(): JSX.Element {
  return (
    <nav className="default-margin absolute flex w-full items-center justify-between">
      <a href="/">
        <img
          src="/logo.svg"
          alt="Um logotipo que é letra F composta por figuras hexágonais."
          className="w-10"
        />
      </a>

      <div className="flex flex-col items-end md:flex-row md:gap-x-5">
        <SmoothScrollLink targetId="about">Sobre</SmoothScrollLink>
        <SmoothScrollLink targetId="projects">Projetos</SmoothScrollLink>
        <SmoothScrollLink targetId="contact">Contato</SmoothScrollLink>
      </div>
    </nav>
  );
}
