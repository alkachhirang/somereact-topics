import React from 'react';
import Slider from "react-slick";
import slickimg1 from '../assets/images/png/slick-img1.png';
import slickimg2 from '../assets/images/png/slick-img2.png'

const SlickSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
          responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <div className='container mx-auto px-3 pt-[50px] md:mt-[50px] pb-[50px] mb-[50px]'>
            <h1 className='text-black font-bold text-center text-[35px] md:text-[48px] mb-[50px]'>Slick-Slider</h1>
            <Slider className='pb-[16px]' {...settings}>
                <div className='px-[20px]'>
                    <img src={slickimg1} alt="slickimg1" className='w-full cursor-pointer' />
                </div>
                <div className='px-[20px]'>
                    <img src={slickimg2} alt="slickimg2" className='w-full cursor-pointer' />
                </div>
                <div className='px-[20px]'>
                    <img src={slickimg1} alt="slickimg1" className='w-full cursor-pointer' />
                </div>
                <div className='px-[20px]'>
                    <img src={slickimg2} alt="slickimg2" className='w-full cursor-pointer' />
                </div>
            </Slider>
        </div>
    )
}

export default SlickSlider;
