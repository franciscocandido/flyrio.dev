import { MdArrowDownward } from 'react-icons/md/index';
import SmoothScrollLink from './SmoothScrollLink';

export default function Hero(): JSX.Element {
  return (
    <div className="default-margin flex h-screen flex-col items-center justify-center bg-topo-texture-mobile bg-cover shadow-[inset_0_0_150px_10px_#000000] sm:bg-topo-texture-desktop">
      <h1 className="font-title mt-auto text-center text-2xl font-bold md:text-5xl lg:text-5xl">
        Oi, meu nome é <br />
        <span className="text-highlight">Francisco Cãndido</span>
        <br /> um desenvolvedor frontend do Brasil
      </h1>

      <SmoothScrollLink
        targetId="about"
        className="mt-auto flex cursor-pointer flex-col items-center gap-y-3 pb-20">
        <span className="text-2xl font-bold">Scroll</span>
        <MdArrowDownward className="animate-bounce" size="50px" />
      </SmoothScrollLink>
    </div>
  );
}
