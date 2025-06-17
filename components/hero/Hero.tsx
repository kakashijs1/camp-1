"use client";

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Otherinfo from "./Otherinfo";
import Image from "next/image";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      className="mySwiper"
    >
      {landmarks.map((landmark, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-xl overflow-hidden group shadow-lg w-full aspect-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
            <Image
              className="w-full  object-contain sm:object-cover transform group-hover:scale-105 brightness-75 group-hover:brightness-50 transition-all duration-500 ease-in-out"
              src={landmark.image}
              alt={landmark.image || "Landmark image"}
              fill
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0   md:bottom-2 md:left-2   z-50 text-white p-3 sm:p-4 bg-black/40 rounded-lg backdrop-blur-md shadow-md transition-all duration-300 group-hover:bg-black/60 m-2 sm:m-0">
              <Otherinfo landmark={landmark} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
