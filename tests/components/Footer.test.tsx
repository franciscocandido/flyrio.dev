import { render, screen } from '@testing-library/react';

import Footer from '@components/Footer';

describe('Component: Footer', () => {
  it('shoud match to snapshot', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });

  it('should have the copyright notice text', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightNotice = screen.getByText(
      `Copyright ${currentYear} Francisco Cândido`
    );

    expect(copyrightNotice).toBeInTheDocument();
  });
});
