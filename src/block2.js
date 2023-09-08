import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
// import './styles.css';
import { Grid, Navigation } from 'swiper/modules';
import fake from './fakestore';
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [star ,setStar] = useState(4)
  return (
    <div className='block2222'>
      <div className='block222'>
        <Swiper
        loop
          slidesPerView={1}
          grid={{
            rows: 2,
          }}
          navigation={true}
          breakpoints={{
            428: {
              slidesPerView: 2,
            },
            578: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 4,
            },
          }}
          
          modules={[Grid, Navigation]}
          className='mySwiper'
        >
          {fake.map((fake, index) => (
            <SwiperSlide key={index}>
              <div>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className='all'
                >
                  <div className='fakeimage '>
                    <img src={fake.image} alt={fake.title} />
                  </div>
                  <div className='title1 black' id=''>
                    {fake.title}
                  </div>
                  <div className='barbie'><div className={hoveredIndex === index ? 'closed122' : 'open122'}>
                    {fake.price}$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className={hoveredIndex === index ? 'open12' : 'closed12'}>
                    <div className={hoveredIndex === index ? 'loop' : 'closedloop'}> <BiSearch/></div>
                  <div className='asd'> 
                  <div>+ Add to cart

                   </div>
                   <div className='dfff'>
                      <div onClick={()=>setStar(1)}>{star>0?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(2)}>{star>1?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(3)}>{star>2?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(4)}>{star>3?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(5)}>{star>4?<AiFillStar/>:<AiOutlineStar/>}</div>
                    
                    </div> 
                   </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
