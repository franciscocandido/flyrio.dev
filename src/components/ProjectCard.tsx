interface Props {
  tags: String[];
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export default function ProjectCard({
  tags,
  image,
  title,
  description,
}: Props): JSX.Element {
  return (
    <div className="default-margin flex flex-col gap-y-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-shadow">{description}</p>
      <pre>{tags}</pre>
      <img src={`/projects/${image.src}`} alt={image.alt} />
    </div>
  );
}
