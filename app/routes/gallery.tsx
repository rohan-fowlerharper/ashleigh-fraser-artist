import type { MetaFunction, LinksFunction } from "remix";

// TODO: add section heading back
// import SectionHeading from "~/components/SectionHeading";
import SplashSlider from "~/components/SplashSlider";

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
