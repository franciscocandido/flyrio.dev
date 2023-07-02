import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si/index';

import AboutSectionTool from '@components/AboutSection/AboutSectionTool';

export default function AboutSectionTools(): JSX.Element {
  return (
    <>
      <h1 className="mb-5 mt-10 text-center font-spaceGrotesk font-bold text-highlight">
        Minhas Ferramentas
      </h1>

      <div className="grid grid-flow-col grid-rows-2 place-content-center gap-5 md:grid-rows-1">
        <AboutSectionTool
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          inlineText="JavaScript">
          <SiJavascript />
        </AboutSectionTool>

        <AboutSectionTool href="https://react.dev/" inlineText="React">
          <SiReact />
        </AboutSectionTool>

        <AboutSectionTool href="https://nextjs.org/" inlineText="Next.JSc">
          <SiNextdotjs />
        </AboutSectionTool>

        <AboutSectionTool
          href="https://tailwindcss.com/"
          inlineText="TailwindCSS">
          <SiTailwindcss />
        </AboutSectionTool>
      </div>
    </>
  );
}
