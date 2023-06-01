import NavbarLink from '@components/NavbarLink';

export default function Navbar() {
  return (
    <nav className="default-margin absolute flex w-full items-center justify-between">
      <a href="/">
        <img
          src="/logo.svg"
          alt="Um logotipo que é letra F composta por figuras hexágonais."
          className="w-10"
        />
      </a>

      <div className="flex flex-col md:flex-row md:gap-x-5">
        <NavbarLink targetSection="about">Sobre Mim</NavbarLink>
        <NavbarLink targetSection="projects">Projetos</NavbarLink>
        <NavbarLink targetSection="contact">Contato</NavbarLink>
      </div>
    </nav>
  );
}
