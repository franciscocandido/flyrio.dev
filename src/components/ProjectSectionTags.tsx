interface Props {
  tags: String[];
}

export default function ProjectSectionTags({ tags }: Props): JSX.Element {
  return (
    <div className="flex items-start gap-x-1 text-xs font-bold">
      {tags.map((tag) => (
        <span
          className="rounded border border-shadow p-1 text-shadow"
          key={tag.valueOf()}>
          {tag}
        </span>
      ))}
    </div>
  );
}
