import React from 'react'
import { Banner } from '../components/Shope/Banner'
import Product from '../components/Shope/Product'
import DealsOfDay from '../components/utils/DealsOfDay'
import { Subscribe } from '../components/utils/Subscribe'

export const Shop = () => {
  return (
    <div>
      <Banner/>
      <Product/>
      <DealsOfDay/>
      <Subscribe/>
    </div>
  )
}
