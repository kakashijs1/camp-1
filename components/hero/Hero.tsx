"use client";

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 3000,
      }}
    >
      {landmarks.map((landmark, index) => (

          <SwiperSlide key={index}>
            <div
            className="relative rounded-md overflow-hidden group"
            >
              <img 
              className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
              src={landmark.image} />
            </div>
          </SwiperSlide>

      ))}
    </Swiper>
  );
};
export default Hero;
