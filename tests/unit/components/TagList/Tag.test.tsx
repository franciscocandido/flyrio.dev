import { render, screen } from '@testing-library/react';
import Tag, { TagProps } from '@components/TagList/Tag';

describe('<Tag />', () => {
  const mockProps: TagProps = {
    value: 'Vitest',
  };

  it('should render the component', () => {
    const component = render(<Tag {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should match to snapshot', () => {
    const component = render(<Tag {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should have the correct value', () => {
    render(<Tag {...mockProps} />);

    expect(screen.getByRole('listitem')).toHaveTextContent('Vitest');
  });
});
