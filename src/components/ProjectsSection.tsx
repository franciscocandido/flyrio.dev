import BaseSection from '@components/BaseSection';
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects', ({ data }) => {
  return data.isDraft === false;
});

export default function ProjectsSection(): JSX.Element {
  return (
    <BaseSection title="Portfólio" id="projects">
      <h1>Portflio Section</h1>
      {allProjects.map((projectEntry) => (
        <>
          <pre>{projectEntry.data.title}</pre>
          <img src={projectEntry.data.image.src}></img>
        </>
      ))}
    </BaseSection>
  );
}
