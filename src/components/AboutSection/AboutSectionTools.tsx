import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiAstro,
} from 'react-icons/si/index';

import AboutSectionTool from '@components/AboutSection/AboutSectionTool';

export default function AboutSectionTools(): JSX.Element {
  return (
    <>
      <h1 className="mb-5 mt-10 text-center font-spaceGrotesk font-bold text-highlight">
        Minhas Ferramentas
      </h1>

      <div className="grid grid-flow-col grid-rows-2 place-content-center gap-5 md:grid-rows-1">
        <AboutSectionTool inlineText="JavaScript">
          <SiJavascript />
        </AboutSectionTool>

        <AboutSectionTool inlineText="React">
          <SiReact />
        </AboutSectionTool>

        <AboutSectionTool inlineText="TailwindCSS">
          <SiTailwindcss />
        </AboutSectionTool>

        <AboutSectionTool inlineText="Astro">
          <SiAstro />
        </AboutSectionTool>
      </div>
    </>
  );
}
