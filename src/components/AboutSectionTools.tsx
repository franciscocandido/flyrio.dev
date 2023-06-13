import {
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiNextdotjs,
} from 'react-icons/si/index';
import { IconContext } from 'react-icons';

import AboutSectionTool from '@components/AboutSectionTool';

export default function AboutSectionTools(): JSX.Element {
  return (
    <IconContext.Provider value={{ size: '30px' }}>
      <h3 className="mb-5 mt-10 text-center text-highlight">
        Minhas Ferramentas
      </h3>
      <div className="grid grid-flow-col grid-rows-2 place-content-center gap-5 md:grid-rows-1">
        <AboutSectionTool
          name="TypeScript"
          link="https://www.typescriptlang.org/">
          <SiTypescript />
        </AboutSectionTool>

        <AboutSectionTool name="Next.JS" link="https://nextjs.org/">
          <SiNextdotjs />
        </AboutSectionTool>

        <AboutSectionTool name="Astro" link="https://astro.build/">
          <SiAstro />
        </AboutSectionTool>

        <AboutSectionTool name="TailwindCSS" link="https://tailwindcss.com/">
          <SiTailwindcss />
        </AboutSectionTool>
      </div>
    </IconContext.Provider>
  );
}
