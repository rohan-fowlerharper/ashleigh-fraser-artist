import type { MetaFunction } from "remix";
import SectionHeading from "~/components/SectionHeading";
import SplashSlider from "~/components/SplashSlider";
import type { LinksFunction } from "remix";

import styles from "swiper/swiper-bundle.min.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: "GALLERY | Ashleigh Fraser Artist" };
};

export default function GalleryRoute() {
  return (
    <section id="gallery">
      {/* <SectionHeading title="Gallery" subtitle="This is the gallery section" /> */}
      <br />
      <SplashSlider />
    </section>
  );
}
