import TagList from '@components/TagList';

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
    <a
      href={path}
      className="group flex flex-col gap-y-3 rounded border border-accent-2 p-5 font-spaceGrotesk transition hover:bg-accent-1">
      <h1 className="text-3xl font-bold group-hover:text-highlight group-hover:underline">
        {title}
      </h1>
      <p className="font-bold text-shadow">{description}</p>
      <TagList tagsArray={tags} />
      <img className="rounded" src={`/projects/${image.src}`} alt={image.alt} />
    </a>
  );
}
