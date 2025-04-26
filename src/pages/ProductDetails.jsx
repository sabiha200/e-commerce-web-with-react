import React from 'react';
import ProductSlide from "product-slide";

const ProductDetails = () => {
  const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true,          // or false
  };

  return (
    <section>
      <div className="container"> <ProductSlide settings={settings} api={API.images} /> </div>
    </section>
  )
}

export default ProductDetails