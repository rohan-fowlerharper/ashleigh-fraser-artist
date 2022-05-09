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
    <div className="w-full bg-zinc-100 py-6">
      <div className="mx-auto flex h-[40rem] max-w-4xl justify-center">
        <div className="w-1/2 bg-zinc-50 p-8 text-center">
          <p className="h-full text-[1.8vw] font-medium text-zinc-600">
            My hand drawn, bespoke commission process starts with your own
            photo. I transform the photo into an outline, then gradually build
            up detail onto the paper. The finished portrait is a tribute to your
            pet to treasure for a lifetime.
          </p>
        </div>
        <div className="w-1/2 overflow-hidden">
          <Swiper {...swiperParams}>
            <SwiperSlide>
              <div className="h-[40rem] bg-amber-700"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40rem] bg-blue-700"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40rem] bg-green-700"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40rem] bg-yellow-700"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
