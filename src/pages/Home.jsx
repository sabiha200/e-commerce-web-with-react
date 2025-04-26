import React from "react";
import { Banner } from "../components/Home/Banner";
import { ProductBanner } from "../components/Home/ProductBanner";
import { PopularProduct } from "../components/Home/popularProduct";
import { BestSells } from "../components/Home/BestSells";
import { Categories } from "../components/Home/Categories";
import TrendyProducts from "../components/Home/TrendyProducts";
import { Subscribe } from "../components/utils/Subscribe";
import DealsOfDay from "../components/utils/DealsOfDay";

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ProductBanner />
      <PopularProduct />
      <BestSells />
      <DealsOfDay />
      <TrendyProducts />
      <Subscribe />
    </>
  );
};
