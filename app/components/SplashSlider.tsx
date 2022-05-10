import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper";
import { Swiper as SwiperInterface, Pagination, A11y, Autoplay } from "swiper";

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
};

SwiperInterface.use([Pagination, A11y, Autoplay]);

export default function SplashSlider() {
  return (
    <div className="mx-auto flex max-h-96 max-w-4xl flex-col md:max-h-full md:flex-row">
      <div className="aspect-[3/4] h-auto bg-zinc-50 p-8 text-center md:w-1/2">
        <p className=" h-full text-3xl font-medium text-zinc-600 md:leading-[2.75rem] lg:text-[2.4rem]">
          My hand drawn, bespoke commission process starts with your own photo.
          I transform the photo into an outline, then gradually build up detail
          onto the paper. The finished portrait is a tribute to your pet to
          treasure for a lifetime.
        </p>
      </div>
      <div className="md:w-1/2">
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <div className="aspect-[3/4] h-auto w-full bg-slate-500"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[3/4] h-auto w-full bg-gray-600"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[3/4] h-auto w-full bg-slate-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[3/4] h-auto w-full bg-zinc-700"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
