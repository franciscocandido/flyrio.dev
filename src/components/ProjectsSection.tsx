import BaseSection from '@components/BaseSection';
import ProjectCard from '@components/ProjectCard';
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects', ({ data }) => {
  return data.isDraft === false;
});

export default function ProjectsSection(): JSX.Element {
  return (
    <BaseSection title="Portfólio" id="projects">
      {allProjects.map(({ data }) => (
        <div className="grid grid-cols-1 gap-10">
          <ProjectCard
            title={data.title}
            description={data.description}
            image={data.image}
            tags={data.tags}
          />
          <ProjectCard
            title={data.title}
            description={data.description}
            image={data.image}
            tags={data.tags}
          />
        </div>
      ))}
    </BaseSection>
  );
}
