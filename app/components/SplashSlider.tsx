import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInterface, SwiperOptions } from "swiper";
import { Pagination, A11y, Autoplay } from "swiper";

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
    <div className="flex">
      <div className="h-80 w-1/2 bg-slate-500"></div>
      <div className="h-80 w-1/2 overflow-hidden">
        <Swiper height={320} {...swiperParams}>
          <SwiperSlide>
            <div className="h-80 bg-amber-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-80 bg-blue-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-80 bg-green-700"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-80 bg-yellow-700"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
