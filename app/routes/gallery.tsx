import type { MetaFunction } from "remix";

// TODO: add section heading back
import SectionHeading from "~/components/SectionHeading";

export const meta: MetaFunction = () => {
  return { title: "GALLERY | Ashleigh Fraser Artist" };
};

export default function GalleryRoute() {
  return (
    <section id="gallery" className="mx-2 pt-6 md:container">
      <SectionHeading title="Gallery" subtitle="This is the gallery section" />
    </section>
  );
}
