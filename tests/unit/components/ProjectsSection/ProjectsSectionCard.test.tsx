import { render, screen } from '@testing-library/react';
import ProjectsSectionCard, {
  ProjectsSectionCardProps,
} from '@components/ProjectsSection/ProjectsSectionCard';

describe('<AboutSectionCard />', () => {
  const mockProps: ProjectsSectionCardProps = {
    description: 'description',
    title: 'title',
    tags: ['Svelte', 'Supabase', 'Vercel'],
    path: '/project',
    image: {
      src: 'image.png',
      alt: 'im a image',
    },
  };

  it('should render the component', () => {
    const component = render(<ProjectsSectionCard {...mockProps} />);

    expect(component).toBeTruthy();
  });

  it('should render the correct content inside', () => {
    render(<ProjectsSectionCard {...mockProps} />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockProps.title
    );
  });
});
