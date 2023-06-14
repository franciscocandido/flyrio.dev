import ProjectSectionTags from '@components/ProjectSectionTags';

interface Props {
  tags: String[];
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  path: string;
}

export default function ProjectCard({
  tags,
  image,
  title,
  description,
  path,
}: Props): JSX.Element {
  return (
    <a href={path}>
      <div className="flex flex-col gap-y-3 font-spaceGrotesk transition hover:-translate-y-1 hover:cursor-pointer hover:text-highlight">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-bold text-shadow">{description}</p>
        <ProjectSectionTags tags={tags} />
        <img src={`/projects/${image.src}`} alt={image.alt} />
      </div>
    </a>
  );
}
