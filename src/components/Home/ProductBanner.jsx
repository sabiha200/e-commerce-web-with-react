import React from 'react'
import { ProductBannerItem} from './ProductBannerItem'
export const ProductBanner = () => {
  return (
    <section className='pb-12 overflow-x-hidden'>
        <div className="container flex flex-col sm:flex-row gap-6">
          <ProductBannerItem bg='/banner1.png' url='/'>Everyday Fresh & Clean with Our Products</ProductBannerItem>
          <ProductBannerItem bg='/banner-2.png' url='/'>Make your Breakfast Healthy and Easy</ProductBannerItem>
          <ProductBannerItem bg='/banner-3.png' url='/'>The best Organic Products Online</ProductBannerItem>
        </div>
    </section>
  )
}
