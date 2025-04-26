import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";
import { ProductItem } from "../utils/ProductItem";

export const BestSells = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow customStyle="absolute  top-40  left-5" />,
    nextArrow: <NextArrow customStyle=" absolute top-40 right-5" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-12">
      <div className="container relative">
        <div className="flex pb-4 justify-between flex-col md:flex-row gap-7 md:items-end">
          <h2 className="sectn_heading">Daily Best Sells</h2>
          <ul className="flex flex-wrap gap-2 md:gap-7 text-base font-light text-primary">
            <li>
              <button className="hover:text-brand">Featured</button>
            </li>
            <li>
              <button className="hover:text-brand">Popular</button>
            </li>
            <li>
              <button className="hover:text-brand">New added</button>
            </li>
          </ul>
        </div>
        <div className="pt-11 flex flex-col lg:flex-row overflow-x-auto gap-6">
          <div
            className="p-8 md:hidden xl:block lg:py-20 lg:px-12 bg-no-repeat bg-cover rounded-xl bg-center :w-fit items-center"
            style={{ backgroundImage: "url('/Background.png') " }}
          >
            <h2 className="font-bold text-4xl lg:text-2xl text-primary xl:w-62 pb-24 mb-4">
              Bring nature into your home
            </h2>
            <Link
              to="/"
              className="bg-brand py-2 px-2.5 rounded-md text-white text-xs flex items-center gap-1 w-fit"
            >
              Shop now
              <FaArrowRight />
            </Link>
          </div>
          <div className="className='xl:w-[75%] overflow-x-auto md:w-full">
            <Slider {...settings}>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>

              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
              <div className="px-2 xl:px-4">
                <ProductItem />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
