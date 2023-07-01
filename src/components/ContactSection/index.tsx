import ContactSectionLink from '@components/ContactSection/ContactSectionLink';
import BaseSection from '@components/BaseSection';
import EmailButton from '@components/EmailButton';

import { SiGithub } from 'react-icons/si/index';
import { IconContext } from 'react-icons';

export default function ContactSection(): JSX.Element {
  return (
    <BaseSection title="Contato" id="contact">
      <IconContext.Provider value={{ size: '30px' }}>
        <EmailButton />

        <div className="mt-10 flex justify-center gap-x-10">
          <ContactSectionLink
            href="https://github.com/franciscocandido/"
            name="Meu perfil no GitHub.">
            <SiGithub />
          </ContactSectionLink>
        </div>
      </IconContext.Provider>
    </BaseSection>
  );
}
