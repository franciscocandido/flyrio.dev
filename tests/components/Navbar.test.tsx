import { render } from '@testing-library/react';

import Navbar from '@components/Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const element = render(<Navbar />);
    expect(element).toMatchSnapshot();
  });
});
