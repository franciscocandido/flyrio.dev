import Tag from '@components/TagList/Tag';

export interface TagListProps {
  tagsArray: String[];
}

export default function TagList({ tagsArray }: TagListProps): JSX.Element {
  const listedTags = tagsArray.map((tag) => (
    <Tag value={tag} key={tagsArray.indexOf(tag)} />
  ));

  return <ul className="flex gap-x-1 text-sm font-bold">{listedTags}</ul>;
}
