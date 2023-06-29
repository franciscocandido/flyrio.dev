import { render, screen } from '@testing-library/react';
import ContactSectionLink from '@components/ContactSection/ContactSectionLink';

describe('<ContactSectionLink />', () => {
  it('should render the component', () => {
    const component = render(
      <ContactSectionLink href="pages">Pages</ContactSectionLink>
    );

    expect(component).toBeTruthy();
  });

  it('should match to snapshot', () => {
    const component = render(
      <ContactSectionLink href="pages">Pages</ContactSectionLink>
    );

    expect(component).toMatchSnapshot();
  });
});
