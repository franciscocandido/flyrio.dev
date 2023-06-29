import TagList from '@components/TagList';

export interface ProjectsSectionCardProps {
  title: string;
  description: string;
  path: string;
  tags: String[];
  image: {
    src: string;
    alt: string;
  };
}

export default function ProjectsSectionCard({
  title,
  description,
  path,
  tags,
  image,
}: ProjectsSectionCardProps): JSX.Element {
  return (
    <a
      href={`/projects/${path}`}
      className="group flex flex-col gap-y-3 rounded border border-accent-2 p-5 font-spaceGrotesk transition hover:-translate-y-0.5 hover:bg-accent-1">
      <h1 className="text-3xl font-bold group-hover:text-highlight ">
        {title}
      </h1>
      <p className="font-bold text-shadow">{description}</p>
      <TagList tagsArray={tags} />
      <img className="rounded" src={`/projects/${image.src}`} alt={image.alt} />
    </a>
  );
}
