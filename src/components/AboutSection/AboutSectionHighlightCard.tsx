interface AboutSectionHighlightCardProps {
  emoji: string;
  description: string;
}

export default function AboutSectionHighlightCard({
  emoji,
  description,
}: AboutSectionHighlightCardProps): JSX.Element {
  return (
    <div className="flex h-64 w-64 select-none flex-col items-center justify-center gap-y-5 rounded border border-shadow p-5 text-center text-paragraph">
      <h1 role="presentation" className="text-5xl">
        {emoji}
      </h1>
      <p>{description}</p>
    </div>
  );
}
