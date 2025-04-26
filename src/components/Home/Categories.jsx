import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { CategoryItem } from "./CategoryItem";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";

export const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    nextArrow: <NextArrow customStyle=" absolute -top-10 md:-top-16 right-0" />,
    prevArrow: (
      <PrevArrow customStyle=" absolute -top-10 md:-top-16 right-10 md:right-16" />
    ),

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2,
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
    <section className="pt-14 pb-11">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-7 md:items-end">
          <h1 className="sectn_heading">Featured Categories</h1>
          <ul className="flex flex-wrap gap-2 md:gap-7 text-base font-light text-primary">
            <li>
              <Link to="/" className="hover:text-brand">
                Cake & Milk
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Coffes & Teas
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Pet Foods
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand">
                Vegetables
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-11 slider">
          <Slider {...settings}>
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </Slider>
        </div>
      </div>
    </section>
  );
};
