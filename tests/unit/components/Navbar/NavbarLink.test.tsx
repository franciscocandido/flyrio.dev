import { render, screen } from '@testing-library/react';
import NavbarLink, { NavbarLinkProps } from '@components/Navbar/NavbarLink';

describe('<NavbarLink />', () => {
  const mockProps: NavbarLinkProps = {
    href: '#games',
    content: 'Jogs',
  };

  it('should render the component', () => {
    const component = render(<NavbarLink {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should match to snapshot', () => {
    const component = render(<NavbarLink {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should have a link with "#games" in href', () => {
    render(<NavbarLink {...mockProps} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.href);
  });
});
