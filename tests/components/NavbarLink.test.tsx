import { render, screen } from '@testing-library/react';

import NavbarLink from '@components/NavbarLink';

describe('NavbarLink', () => {
  test('renders correctly', () => {
    const element = render(
      <NavbarLink targetSection="test">
        <h1>Testing</h1>
      </NavbarLink>
    );

    expect(element).toMatchSnapshot();
  });

  test('should have a text element inside', () => {
    render(
      <NavbarLink targetSection="about">
        <h1>About</h1>
      </NavbarLink>
    );

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('About');
  });
});
