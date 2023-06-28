import { render, screen } from '@testing-library/react';
import TagList, { TagListProps } from '@components/TagList';

describe('<TagList />', () => {
  const mockProps: TagListProps = {
    tagsArray: ['Python', 'JavaScript', 'Ruby'],
  };

  it('should render the component', () => {
    const component = render(<TagList {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should render the correct number of list items', () => {
    render(<TagList {...mockProps} />);

    expect(screen.queryAllByRole('listitem').length).toBe(3);
  });
});
