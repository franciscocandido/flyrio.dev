import NavbarLink from '@components/Navbar/NavbarLink';
import useWindowScrollPosition from '@hooks/useWindowScrollPosition';
import { useEffect, useState } from 'react';

export default function Navbar(): JSX.Element {
  const [isOnTop, setIsOnTop] = useState<boolean | null>(true);
  const [{ y }] = useWindowScrollPosition();

  useEffect(() => {
    if (Number(y) <= 100) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  }, [y, isOnTop]);

  return (
    <nav
      className={`default-margin fixed z-10 flex w-full flex-row items-center justify-between border-b transition duration-300 ${
        isOnTop
          ? 'border-b-transparent bg-transparent'
          : 'border-b-accent-2 bg-background bg-opacity-90 backdrop-blur'
      }`}>
      <a href="/#top">
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
