import { render, screen, within } from '@testing-library/react';
import Navbar from '@components/Navbar';

describe('<Navbar />', () => {
  it('should render the component', () => {
    const component = render(<Navbar />);

    expect(component).toBeTruthy();
  });

  it('should have a img with alt text', () => {
    render(<Navbar />);

    expect(
      screen.getByAltText('Letra F composta por figuras hexágonais.')
    ).toBeInTheDocument();
  });

  it('should have a ul with more than 0 items', () => {
    render(<Navbar />);

    expect(screen.queryAllByRole('listitem').length).toBeGreaterThan(0);
  });
});
