import NavbarLink from '@components/Navbar/NavbarLink';

export default function Navbar(): JSX.Element {
  return (
    <nav className="default-margin absolute flex w-full flex-row items-center justify-between">
      <a href="/">
        <img
          className="w-10 transition hover:-translate-y-0.5"
          src="/brand.svg"
          alt="Letra F composta por figuras hexágonais."
        />
      </a>

      <ul className="flex flex-col text-right font-spaceGrotesk font-bold md:flex-row md:gap-5">
        <NavbarLink href="#about" content="Sobre Mim" />
        <NavbarLink href="#projects" content="Projetos" />
        <NavbarLink href="#contact" content="Contato" />
      </ul>
    </nav>
  );
}
