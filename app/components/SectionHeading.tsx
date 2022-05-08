import { Link } from "@remix-run/react";

export default function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="mb-6">
      <h2 id={id} className="group right-4 text-3xl font-medium text-zinc-700">
        {title}
        {id && (
          <Link
            to={`#${id}`}
            className="pl-2 text-3xl font-medium opacity-0 transition-opacity before:content-['#'] hover:underline group-hover:opacity-100"
            title="Direct link to heading"
          />
        )}
      </h2>
      {subtitle && <p className="text-md text-zinc-500">{subtitle}</p>}
    </div>
  );
}
