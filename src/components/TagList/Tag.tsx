export interface TagProps {
  value: String;
}

export default function Tag({ value }: TagProps): JSX.Element {
  return (
    <li className="rounded border border-shadow p-1 text-shadow">{value}</li>
  );
}
