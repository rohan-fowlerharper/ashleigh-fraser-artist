export default function SectionLayout({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="max-w-screen container mt-6 px-2 md:mx-auto md:max-w-5xl"
    >
      {children}
    </section>
  );
}
