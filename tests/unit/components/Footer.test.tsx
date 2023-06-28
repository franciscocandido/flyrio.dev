import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

describe('<Footer />', () => {
  it('should match to snapshot', () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });

  it('should have the current year in the copyright notice', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    expect(screen.getByText(`Copyright 2023-${currentYear} Francisco Cândido`));
  });
});
