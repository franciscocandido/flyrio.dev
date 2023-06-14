import BaseSection from '@components/BaseSection';
import AboutSectionTools from '@components/AboutSectionTools';
import EmailButton from '@components/EmailButton';

export default function AboutSection(): JSX.Element {
  return (
    <BaseSection title="Sobre Mim" id="about">
      <div className="mx-10 flex flex-col text-left font-spaceGrotesk text-sm font-bold text-paragraph md:mx-52 md:text-base">
        <div className="flex flex-col gap-y-5">
          <p>
            Atualmente, tenho 18 anos e estudo JavaScript e seu ecossistema há
            cerca de quatro anos. Meus primeiros projetos foram bots para
            Discord feitos exclusivamente para servir meu grupo de amigos, mas
            com o passar do tempo e um pouco de medo daqueles robôs se voltarem
            contra mim, fui me interessando pela parte de frontend dos sites e
            como um projeto saía do papel (ou Figma… Sketch… você entendeu) e ia
            parar na tela de milhões de usuários.
          </p>
          <p>
            Eu aprendi muitas coisas nesses anos de estudo. Se você olhar aqui
            embaixo, vai ver algumas das tecnologias que aprendi nesse
            meio-tempo. Ah, também tem o meu e-mail, caso queira perguntar
            pessoalmente sobre algum conhecimento específico.
          </p>
        </div>
        <EmailButton />
        <AboutSectionTools />
      </div>
    </BaseSection>
  );
}
