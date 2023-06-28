import { render, screen } from '@testing-library/react';
import SmoothScrollLink, {
  SmoothScrollLinkProps,
} from '@components/SmoothScrollLink';

describe('<SmoothScrollLink />', () => {
  const mockProps: SmoothScrollLinkProps = {
    children: 'Books',
    targetId: 'books',
  };

  it('should render the component', () => {
    const component = render(<SmoothScrollLink {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should use the correct value in href', () => {
    render(<SmoothScrollLink targetId="movies">Movies</SmoothScrollLink>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '#movies');
  });
});
