import BaseSection from '@components/BaseSection';
import ProjectCard from '@components/ProjectSectionCard';
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects', ({ data }) => {
  return data.isDraft === false;
});

export default function ProjectsSection(): JSX.Element {
  return (
    <BaseSection title="Projetos" id="projects">
      {allProjects.map(({ data, slug }) => (
        <div className="default-margin grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            key={slug}
            path={`/projects/${slug}`}
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
