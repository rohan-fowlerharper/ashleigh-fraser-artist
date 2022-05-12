export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mx-2 pt-6 md:container">{children}</section>;
}
