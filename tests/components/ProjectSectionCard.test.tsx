import { render, screen } from '@testing-library/react';

import ProjectSectionCard from '@components/ProjectSectionCard';

describe('ProjectSectionCard', () => {
  const TAGS = ['Python', 'AWS', 'TypeScript'];
  const IMAGE = { src: 'example.png', alt: 'example image' };
  const TITLE = 'Awesome Title';
  const DESCRIPTION = 'The Best Description Ever';
  const PATH = '/best-post';

  test('renders correctly', () => {
    const element = render(
      <ProjectSectionCard
        tags={TAGS}
        image={IMAGE}
        title={TITLE}
        description={DESCRIPTION}
        path={PATH}
      />
    );

    expect(element).toMatchSnapshot();
  });

  test('should navigate to /best-post when link is clicked', () => {
    render(
      <ProjectSectionCard
        tags={TAGS}
        image={IMAGE}
        title={TITLE}
        description={DESCRIPTION}
        path={PATH}
      />
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/best-post');
  });
});
