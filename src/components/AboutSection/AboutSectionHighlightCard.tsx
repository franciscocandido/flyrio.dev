interface AboutSectionHighlightCardProps {
  emoji: string;
  description: string;
}

export default function AboutSectionHighlightCard({
  emoji,
  description,
}: AboutSectionHighlightCardProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2 rounded border border-accent-2 p-5 text-center">
      <h1 role="presentation" className="select-none text-3xl">
        {emoji}
      </h1>
      <p>{description}</p>
    </div>
  );
}
