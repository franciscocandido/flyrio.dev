import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiAstro,
} from 'react-icons/si/index';
import { IconContext } from 'react-icons';

import LinkWithIcon from '@components/LinkWithIcon';

export default function AboutSectionTools(): JSX.Element {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <h3 className="mb-5 mt-10 text-center text-highlight">
        Minhas Ferramentas
      </h3>
      <div className="grid grid-flow-col grid-rows-2 place-content-center gap-5 md:grid-rows-1">
        <LinkWithIcon
          content="JavaScript"
          link="https://wikipedia.org/wiki/JavaScript">
          <SiJavascript />
        </LinkWithIcon>

        <LinkWithIcon content="React" link="https://react.dev/">
          <SiReact />
        </LinkWithIcon>

        <LinkWithIcon content="Astro" link="https://astro.build/">
          <SiAstro />
        </LinkWithIcon>

        <LinkWithIcon content="TailwindCSS" link="https://tailwindcss.com/">
          <SiTailwindcss />
        </LinkWithIcon>
      </div>
    </IconContext.Provider>
  );
}
