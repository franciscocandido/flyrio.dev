import { render, screen } from '@testing-library/react';
import AboutSectionTools from '@components/AboutSection/AboutSectionTools';

describe('<AboutSectionTools />', () => {
  it('should render the component', () => {
    const component = render(<AboutSectionTools />);

    expect(component).toBeTruthy();
  });

  it('should match to snapshot', () => {
    const component = render(<AboutSectionTools />);

    expect(component).toMatchSnapshot();
  });

  it('should have "Minhas Ferramentas" inside', () => {
    render(<AboutSectionTools />);

    expect(screen.getByText('Minhas Ferramentas')).toBeInTheDocument();
  });
});
