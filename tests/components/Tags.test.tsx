import { cleanup, render, screen } from '@testing-library/react';

import Tags from '@components/Tags';

describe('Tags', () => {
  const THREE_TAGS = ['Java', 'Tetris', 'Rage'];
  const FOUR_TAGS = ['Arch Linux', 'ILoveCandy', 'ParallelDownloads', '5'];

  test('renders correctly', () => {
    const component = render(<Tags tags={THREE_TAGS} />);
    expect(component).toMatchSnapshot();
  });

  test('render the correct number of spans', () => {
    render(<Tags tags={THREE_TAGS} />);
    expect(screen.getAllByTestId('tag').length).toBe(3);
    cleanup();

    render(<Tags tags={FOUR_TAGS} />);
    expect(screen.getAllByTestId('tag').length).toBe(4);
  });
});
