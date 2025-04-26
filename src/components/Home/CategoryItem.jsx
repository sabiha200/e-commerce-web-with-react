import React from 'react'
import { Link } from 'react-router'

export const CategoryItem = () => {
  return (
    <Link to='/' className='bg-[#F2FCE4] p-6 mx-2 rounded-xl text-center transition-all hover:shadow-2xl inline-block'>
        <img src="burger.png" alt="burger.png" />
        <h3 className='text-primary pt-4 font-bold text-base'>Cake & Milk</h3>
        <p className='text-secondary text-sm font-normal'>26 items</p>
    </Link>
  )
}
