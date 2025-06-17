'use client'

import { LandmarkCardProps } from '@/utils/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import Otherinfo from './Otherinfo'
import Image from 'next/image'
import { m, LazyMotion, domAnimation } from 'framer-motion'

// Wrap the motion components with LazyMotion for better performance

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <LazyMotion features={domAnimation}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className='mySwiper'
      >
        {landmarks.map((landmark, index) => (
          <SwiperSlide key={index}>
            <m.div
              className='relative rounded-xl overflow-hidden group shadow-lg w-full aspect-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <m.div
                className='relative w-full h-full'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  className='w-full object-contain sm:object-cover brightness-75 group-hover:brightness-50'
                  src={landmark.image}
                  alt={landmark.image || 'Landmark image'}
                  fill
                  priority
                />
              </m.div>

              <m.div
                className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <m.div
                className='absolute bottom-0 left-0 md:bottom-2 md:left-2 z-50 text-white p-3 sm:p-4 bg-black/40 rounded-lg backdrop-blur-md shadow-md m-2 sm:m-0'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  transition: { duration: 0.2 },
                }}
              >
                <Otherinfo landmark={landmark} />
              </m.div>
            </m.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </LazyMotion>
  )
}

export default Hero
