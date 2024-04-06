// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../assets/images/png/swiper-img-1.png';
import Img2 from '../assets/images/png/swiper-img-2.png';
import Img3 from '../assets/images/png/swiper-img-3.png';
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <div className='container mx-auto px-3 items-center justify-center pt-[50px]'>
            <h1 className='text-black font-bold text-center text-[35px] md:text-[48px] mb-[50px]'>Swiper-Slider</h1>
            <Swiper
                modules={[EffectFade, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide className=''>
                    <img src={Img1} alt="Img1" className='w-full cursor-pointer' />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={Img2} alt="Img1" className='w-full cursor-pointer' />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={Img3} alt="Img1" className='w-full cursor-pointer' />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={Img1} alt="Img1" className='w-full cursor-pointer' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};