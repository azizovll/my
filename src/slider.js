import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}

        modules={[EffectFade, Navigation, Pagination]}
        loop
        className="mySwiper"


      >
        <SwiperSlide><div>

          <div className='slidetxt2'><div className='slideblock'><h1 data-aos="fade-up">Spring men's T-shirts</h1><h1>Amazing Men's</h1><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            <button>+ Shop now</button></div></div>
        </div>
        </SwiperSlide>

        <SwiperSlide><div>

          <div className='slidetxt1'><div className='slideblock'><h1>Classic Leather Accessories </h1><h1>Amazing For Men's</h1><p>Mauissa aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu hur pariatur. Excepteur sint oct</p><button>+ Shop now</button></div>
          </div></div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}

