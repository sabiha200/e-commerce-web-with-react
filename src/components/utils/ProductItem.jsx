import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router'

export const ProductItem = () => {
  return (
    <div className='p-2 md:p-6 border border-[#F2F3F4] rounded-2xl w-fit relative overflow-hidden'>
      <div className='absolute top-0 left-0 bg-[#F74B81] text-white text-xs px-2 py-1 text-center rounded-br-xl w-14 h-8 '>
        <p>Hot</p>
      </div>
        <img src="Product.png" alt="Product" className='w-full' />
        <h4 className='text-xs font-normal text-secondary'>Snack</h4>
        <Link to="productdetails" className='text-primary font-bold text-sm md:text-base hover:text-brand transition-all'>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
        <div className="flex gap-3 py-2.5">
          <ul className='flex text-amber-400'>
            <li><FaStar /></li> 
            <li><FaStar /></li> 
            <li><FaStar /></li>  
            <li><FaStar /></li> 
            <li><FaStar /></li> 
          </ul> 
          <p className='text-xs font-normal text-secondary'>(4.0)</p>
        </div>
        <p className='text-sm font-normal text-secondary'> By <span className='text-brand font-bold'>NestFood</span> </p>
        <div className='flex flex-col md:flex-row gap-2 justify-between pt-6'>
          <h4 className=' text-sm md:text-lg font-bold text-brand'>
          $28.85 {" "}
          <span className='text-secondary text-base line-through'>$32.8</span>
          </h4>
          <button className='flex items-center bg-[#DEF9EC] text-brand font-bold text-lg md:px-5 p-2 md:py-2.5 rounded-sm cursor-pointer'>
          <IoCartOutline />
            Add
          </button>
        </div>
    </div>
  )
}
