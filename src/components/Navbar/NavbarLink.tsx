export interface NavbarLinkProps {
  content: string;
  href: string;
}

export default function NavbarLink({
  content,
  href,
}: NavbarLinkProps): JSX.Element {
  return (
    <li className="transition hover:text-shadow hover:underline">
      <a href={href}>{content}</a>
    </li>
  );
}
