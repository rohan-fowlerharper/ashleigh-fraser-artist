import type { LinksFunction } from "@remix-run/node";

import HomeRoute from "./home";

import swiperStyles from "swiper/swiper-bundle.min.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: swiperStyles }];
};

export default function IndexRoute() {
  return <HomeRoute />;
}
