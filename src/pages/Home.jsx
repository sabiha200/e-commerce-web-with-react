import React from "react";
import { Banner } from "../components/Home/Banner";
import { ProductBanner } from "../components/Home/ProductBanner";
import { BestSells } from "../components/Home/BestSells";
import { Categories } from "../components/Home/Categories";
import TrendyProducts from "../components/Home/TrendyProducts";
import DealsOfDay from "../components/utils/DealsOfDay";
import { PopularProduct } from "../components/Home/PopularProduct";

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
    </>
  );
};
