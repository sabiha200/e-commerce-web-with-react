import React from 'react'
import { LuSend } from 'react-icons/lu'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{position:'absolute', bottom:"15px", width:"100%"}}
      >
        <ul className='flex justify-center gap-1.5 text-[0px]'> {dots} </ul>
      </div>
    ),
  
  customPaging: i => (
    <div
    className='w-4 h-4 rounded-full border-2 border-black cursor-pointer'
    >
      {i + 1}
    </div>
  ),
};
  
  return (
    <section className='mt-7'>
      <div className="container px-0 banner_slider overflow-x-hidden">
        <Slider {...settings}>
         <div>
         <div 
            className='px-6 py-14 lg:p-24 rounded-4xl bg-no-repeat bg-center'
            style={{ backgroundImage:"url('/banner.png')" }}>
              <h1 className='max-w-2xl font-bold text-primary text-2xl md:text-3xl lg:text-7xl'>Fresh Vegetables
              Big discount</h1>
              <p className='pt-5 md:pt-10 pb-5 md:pb-16 text-secondary text-xl lg:text-3xl font-normal'>Save up to 50% off on your first order</p>
              <div className='bg-white rounded-4xl max-w-md flex items-center justify-between' >
               <LuSend className='text-secondary text-2xl mr-2 md:mr-0 ml-4' />
                <input type="email" placeholder='Your emaill address' className=' outline-0'/>
                <button className='bg-brand rounded-4xl py-2 md:py-5 px-3 md:px-10 text-base w-40 text-white cursor-pointer'>Subscribe</button>
              </div>
          </div>
         </div>
         <div>
         <div 
            className='px-6 py-14 lg:p-24 rounded-4xl bg-no-repeat bg-center'
            style={{ backgroundImage:"url('/banner.png')" }}>
              <h1 className='max-w-2xl font-bold text-primary text-2xl md:text-3xl lg:text-7xl'>Fresh Vegetables
              Big discount</h1>
              <p className='pt-5 md:pt-10 pb-5 md:pb-16 text-secondary text-xl lg:text-3xl font-normal'>Save up to 50% off on your first order</p>
              <div className='bg-white rounded-4xl max-w-md flex items-center justify-between' >
               <LuSend className='text-secondary text-2xl mr-2 md:mr-0 ml-4' />
                <input type="email" placeholder='Your emaill address' className=' outline-0'/>
                <button className='bg-brand rounded-4xl py-2 md:py-5 px-3 md:px-10 text-base w-40 text-white cursor-pointer'>Subscribe</button>
              </div>
          </div>
         </div>
        </Slider> 
          
      </div>
    </section>
  )
}
