import { render } from '@testing-library/react';
import ContactSection from '@components/ContactSection';

describe('<ContactSection />', () => {
  it('should render the component', () => {
    const component = render(<ContactSection />);

    expect(component).toBeTruthy();
  });
});
