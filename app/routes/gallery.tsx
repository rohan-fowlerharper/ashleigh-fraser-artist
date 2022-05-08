import type { MetaFunction } from "remix";
import SectionHeading from "~/components/SectionHeading";

export const meta: MetaFunction = () => {
  return { title: "GALLERY | Ashleigh Fraser Artist" };
};

export default function GalleryRoute() {
  return (
    <section id="gallery">
      <SectionHeading title="Gallery" subtitle="This is the gallery section" />
    </section>
  );
}
