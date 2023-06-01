import BaseSection from '@components/BaseSection';
import AboutSectionCarousel from '@components/AboutSectionCarousel';

export default function AboutSection() {
  return (
    <BaseSection title="Sobre Mim" id="about">
      <div className="mx-10 flex flex-col gap-y-5 text-left font-spaceGrotesk text-sm font-bold md:mx-52 md:text-base">
        <p>
          Atualmente, tenho 18 anos e estudo JavaScript e seu ecossistema há
          cerca de quatro anos. Meus primeiros projetos foram bots para Discord
          feitos exclusivamente para servir meu grupo de amigos, mas com o
          passar do tempo e um pouco de medo daqueles robôs se voltarem contra
          mim, fui me interessando pela parte de frontend dos sites e como um
          projeto saía do papel (ou Figma… Sketch… você entendeu) e ia parar na
          tela de milhões de usuários.
        </p>
        <p>
          Eu aprendi muitas coisas nesses anos de estudo. Se você olhar aqui
          embaixo, vai ver algumas das tecnologias que aprendi nesse meio-tempo.
          Ah, também tem o meu e-mail, caso queira perguntar pessoalmente sobre
          algum conhecimento específico.
        </p>
      </div>
      <AboutSectionCarousel />
    </BaseSection>
  );
}
