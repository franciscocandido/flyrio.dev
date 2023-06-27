import { render, screen } from '@testing-library/react';

import Footer from '@components/Footer';

describe('Footer', () => {
  test('renders correctly', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });

  test('should have the copyright notice text', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightNotice = screen.getByText(
      `Copyright ${currentYear} Francisco Cândido`
    );

    expect(copyrightNotice).toBeInTheDocument();
  });
});
