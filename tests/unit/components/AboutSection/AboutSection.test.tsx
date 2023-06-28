import { render } from '@testing-library/react';
import AboutSection from '@components/AboutSection';

describe('<AboutSection />', () => {
  it('should render the component', () => {
    const component = render(<AboutSection />);

    expect(component).toBeTruthy();
  });
});
