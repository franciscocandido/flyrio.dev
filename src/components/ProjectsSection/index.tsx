import BaseSection from '@components/BaseSection';
import ProjectSectionCard from '@components/ProjectsSection/ProjectsSectionCard';
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects', ({ data }) => {
  return data.isDraft === false;
});

export default function ProjectsSection(): JSX.Element {
  return (
    <BaseSection title="Projetos" id="projects">
      {allProjects.map(({ data, slug }) => (
        <div
          key={slug}
          className="default-margin grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ProjectSectionCard
            title={data.title}
            description={data.description}
            path={slug}
            tags={data.tags}
            image={data.image}
          />
        </div>
      ))}
    </BaseSection>
  );
}
