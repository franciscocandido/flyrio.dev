import BaseSection from '@components/BaseSection';
import EmailButton from '@components/EmailButton';
import LinkWithIcon from '@components/LinkWithIcon';

import { SiGithub, SiLinkedin } from 'react-icons/si/index';
import { IconContext } from 'react-icons';

export default function ContactSection(): JSX.Element {
  return (
    <BaseSection title="Contato" id="contact">
      <IconContext.Provider value={{ size: '30px' }}>
        <div>
          <EmailButton />

          <div className="mt-10 flex justify-center gap-x-10">
            <LinkWithIcon link="https://github.com/franciscocandido/">
              <SiGithub />
            </LinkWithIcon>
            <LinkWithIcon link="https://www.linkedin.com/in/francisco-c%C3%A2ndido-43a70627b/">
              <SiLinkedin />
            </LinkWithIcon>
          </div>
        </div>
      </IconContext.Provider>
    </BaseSection>
  );
}
