import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

export const Slider = () => {
  return (
    <Swiper
      className="w-full h-[250px]"
      pagination={true}
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={true}
    >
      <SwiperSlide>
        <Image src={Banner1} alt="Banner" layout="fill" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Banner2.src} alt="Banner" layout="fill" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Banner3.src} alt="Banner" layout="fill" />
      </SwiperSlide>
    </Swiper>
  );
};
