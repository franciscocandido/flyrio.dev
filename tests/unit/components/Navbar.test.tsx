import { render } from '@testing-library/react';
import Navbar from '@components/Navbar';

describe('<Navbar />', () => {
  it('should match the snapshot', () => {
    const component = render(<Navbar />);

    expect(component).toMatchSnapshot();
  });
});
