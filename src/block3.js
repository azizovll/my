import './css/block3.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
// import './styles.css';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import fake from './fakestore';
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {BiCreditCard, BiSearch, BiSolidTruck} from 'react-icons/bi'
import {FaCalendarAlt} from 'react-icons/fa'
import { click } from '@testing-library/user-event/dist/click';
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import {HiSupport} from 'react-icons/hi'
import {PiArrowCounterClockwiseBold} from 'react-icons/pi'
export default function Block3() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [star ,setStar] = React.useState(4)
 const eskiz=['https://htmldemo.net/boyka/boyka/assets/images/brand/6.png',	'https://htmldemo.net/boyka/boyka/assets/images/brand/6.png','https://htmldemo.net/boyka/boyka/assets/images/brand/2.png','https://htmldemo.net/boyka/boyka/assets/images/brand/3.png','https://htmldemo.net/boyka/boyka/assets/images/brand/4.png','https://htmldemo.net/boyka/boyka/assets/images/brand/5.png','https://htmldemo.net/boyka/boyka/assets/images/brand/6.png',	'https://htmldemo.net/boyka/boyka/assets/images/brand/6.png','https://htmldemo.net/boyka/boyka/assets/images/brand/2.png','https://htmldemo.net/boyka/boyka/assets/images/brand/3.png','https://htmldemo.net/boyka/boyka/assets/images/brand/4.png','https://htmldemo.net/boyka/boyka/assets/images/brand/5.png','https://htmldemo.net/boyka/boyka/assets/images/brand/6.png']
    const [line, setLine] = React.useState(false)
    const [line1, setLine1] = React.useState(false)
    const blog= [{'img':"	https://htmldemo.net/boyka/boyka/assets/images/blog/2.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"		https://htmldemo.net/boyka/boyka/assets/images/blog/3.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"	https://htmldemo.net/boyka/boyka/assets/images/blog/1.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"	https://htmldemo.net/boyka/boyka/assets/images/blog/4.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"		https://htmldemo.net/boyka/boyka/assets/images/blog/3.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"	https://htmldemo.net/boyka/boyka/assets/images/blog/1.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."},{'img':"	https://htmldemo.net/boyka/boyka/assets/images/blog/4.jpg",'zagolovok':"Go to new horizon", "data": "May 17,2018", "more":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ..."}]
    const orlando=[{'img':'	https://htmldemo.net/boyka/boyka/assets/images/comment/com-author.png', 'name':'orando BLoom',"more":'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.'},{'img':'	https://htmldemo.net/boyka/boyka/assets/images/comment/com-author.png', 'name':'orando BLoom',"more":'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.'},{'img':'	https://htmldemo.net/boyka/boyka/assets/images/comment/com-author.png', 'name':'orando BLoom',"more":'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.'}]
   const massiv =[{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/3.jpg',"text":"Earrings"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/4.jpg',"text":"Shirts"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/1.jpg',"text":"Portfolio"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/2.jpg',"text":"Necklaces"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/3.jpg',"text":"Earrings"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/4.jpg',"text":"Shirts"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/1.jpg',"text":"Portfolio"},{'img': 'https://htmldemo.net/boyka/boyka/assets/images/category/2.jpg',"text":"Necklaces"}]
    return (<>
        <div className="hard">
            <div onMouseEnter={() => setLine(true)} onMouseLeave={() => setLine(false)}><img src="	https://htmldemo.net/boyka/boyka/assets/images/banner/bg1.jpg" />
                <span className={line ? "line1" : "noline"}></span>
                <span className={line ? "line2" : "noline"}></span>
                <span className={line ? "line3" : "noline1"}></span>
                <span className={line ? "line4" : "noline1"}></span>

            </div>
            <div onMouseEnter={() => setLine1(true)} onMouseLeave={() => setLine1(false)}><img src="https://htmldemo.net/boyka/boyka/assets/images/banner/bg2.jpg" />
                <span className={line1 ? "line1" : "noline"}></span>
                <span className={line1 ? "line2" : "noline"}></span>
                <span className={line1 ? "line3" : "noline1"}></span>
                <span className={line1 ? "line4" : "noline1"}></span>

            </div>
           


        </div>
        
        <h1>Bestseller Products</h1>
        <h2>Most Trendy 2023 Clother</h2>
        <div className='indextxt31'></div>
        <div className='block2222'><div className='block222'><Swiper
          slidesPerView={1}
          
          navigation={true}
          breakpoints={{
            428: {
              slidesPerView: 4,
            },
          }}
          loop
          modules={[ Navigation]}
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
      </div></div>
      <div className='block2223'><Swiper
      loop
          slidesPerView={2}
          
          navigation={true}
          breakpoints={{
            428: {
              slidesPerView: 5,
            },
          }}
          
          modules={[ Navigation]}
          className='mySwiper'
          
        >
          {eskiz.map((eskiz, index) => (
            <SwiperSlide >
              
                  <div className='eskizimage '>
                    <img src={eskiz} />
                  </div>
                  
                    
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
<h1>Latest Blog Posts</h1>
<h2>There are latest blog posts</h2>

<div className='indextxt36'> </div>

<div className='block2233'>
  <Swiper
      loop
          slidesPerView={1}
          
          navigation={true}
          breakpoints={{
            428: {
              slidesPerView: 3,
            },
          }}
          
          modules={[ Navigation]}
          
          className='mySwiper'
          
        >
          {blog.map((blog, index) => (
                    <SwiperSlide >
                      <div className='vse'>
              
                  <div className=''>
                    <img src={blog.img} />
                  </div>
                  <div className='zagolovok'>{blog.zagolovok}</div>
                  <div className='time'><FaCalendarAlt/>{blog.data} &nbsp;&nbsp;&nbsp;&nbsp; Demo Name</div>
                  <div className='more'>{blog.more}</div></div>
                    
            </SwiperSlide>
          ))}
        </Swiper></div>
        <div className='blackcont'><div className='conttt'>
<h1 id='white'>Client Testimonials</h1>
<h2 id='white'>What they say</h2>
<div className='indextxt31'></div>
<Swiper          
 slidesPerView={1}
          loop
         
          pagination={true}
          modules={[ Navigation,Pagination]}
          className='mySwiper'>

  {orlando.map((orlando, index) => (
                    <SwiperSlide >
                     <div>{orlando.more}</div>
                     <div className='orimg'> <img src={orlando.img}/></div>
                     <div className='orl'>{orlando.name}</div>
                    
            </SwiperSlide>
          ))}



</Swiper>
</div>


        </div>
        <div className='prelast'><Swiper
          loop        
 slidesPerView={1}
          
         breakpoints=
         {{
          428: {
            slidesPerView: 4,
               },
        }}
          className='mySwiper'>

  {massiv.map((massiv, index) => (
            <SwiperSlide >
              <div className='massivimg'><img src={massiv.img}/><div className='massivtext'>{massiv.text}</div></div>
                    
                    
            </SwiperSlide>
          ))}



</Swiper></div>
<div className='last'>
  <div className='lastblock'>
    <div className='lastcont'><BiSolidTruck/></div>
    <div><div className='lasttxt'>Free Shipping</div><div className='lasttxt2'>Free shipping on all US order or order above $200</div></div>
  </div>
  <div className='lastblock'>
    <div className='lastcont'><HiSupport/></div>
    <div><div className='lasttxt'>Support 24/7</div><div className='lasttxt2'>Contact us 24 hours a day, 7 days a week</div></div>
  </div>
  <div className='lastblock'>
    <div className='lastcont'><PiArrowCounterClockwiseBold/></div>
    <div><div className='lasttxt'>30 Days Return</div><div className='lasttxt2'>Simply return it within 30 days for an exchange</div></div>
  </div>
  <div className='lastblock'>
    <div className='lastcont'><BiCreditCard/></div>
    <div><div className='lasttxt'>100% Payment Secure</div><div className='lasttxt2'>We ensure secure payment with PEV</div></div>
  </div>
</div>
        
        </>)

}