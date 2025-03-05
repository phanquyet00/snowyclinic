"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <img
            src="/images/banners/banner1.webp"
            alt="Siêu hội làm đẹp"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banners/banner2.webp"
            alt="Khuyến mãi spa"
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banners/banner3.webp"
            alt="Ưu đãi thẩm mỹ"
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
