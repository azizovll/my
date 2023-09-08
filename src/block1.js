import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './css/block1.css'
import fake from './fakestore';
import { Navigation } from 'swiper/modules';
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

export default function Block1() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [star ,setStar] = useState(4)
  return (
    <>
      <div className="block-1">
        <div className="block-1-1"><img src="https://htmldemo.net/boyka/boyka/assets/images/banner/1.jpg" /></div>
        <div className="block-1-1"><img src="https://htmldemo.net/boyka/boyka/assets/images/banner/2.jpg" /></div>
        <div className="block-1-1"><img src="https://htmldemo.net/boyka/boyka/assets/images/banner/3.jpg" /></div>
      </div>

      <div className='cont1'>
        <div className='cont111'>
          <h2>Daily Deals</h2>
          <p>Deals 30% for all Jackets Products</p>
          <div>
            <div className='cont1-block'>
              <div></div>
            </div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop
              slidesPerView={1}
              breakpoints={{
                570: {
                  slidesPerView: 2,
                }
                

              }}
              className="mySwiper"
            >
              {fake.map((fake, index) => (
                <SwiperSlide key={index}>
                  <div
                  className='all'
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className='timing' id='time'>
                      <div className='square1'><div>0</div> <div>Hours</div></div>
                      <div className='square'><div>0</div> <div>Days</div></div>
                      <div className='square'><div>0</div> <div>mins</div></div>
                      <div className='square'><div>0</div> <div>secs</div></div>
                    </div>
                    <div>
                      <div className='fakeimage'><img src={fake.image} /></div>
                      <div className='title'>{fake.title}</div>
                      <div className='barbie' id='white'><div className={hoveredIndex === index ? 'closed122' : 'open122'}>
                    {fake.price}$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className={hoveredIndex === index ? 'open12' : 'closed12'}>
                  <div className={hoveredIndex === index ? 'loop1' : 'closedloop'}> <BiSearch/></div>

                  <div className='asdd'> 
                  <div>+ Add to cart

                   </div>
                   <div className='dfff1'>
                      <div onClick={()=>setStar(1)}>{star>0?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(2)}>{star>1?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(3)}>{star>2?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(4)}>{star>3?<AiFillStar/>:<AiOutlineStar/>}</div>
                      <div onClick={()=>setStar(5)}>{star>4?<AiFillStar/>:<AiOutlineStar/>}</div>
                    
                    </div> 
                   </div>
                  </div></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <h1 className='indextxt1'>New Arrivals</h1>
      <p className='indextxt2'>Most Trendy 2023 Clother</p>
      <div className='indextxt3'></div>
    </>
  );
}




