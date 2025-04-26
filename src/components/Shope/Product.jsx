import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { ProductItem } from "../utils/ProductItem";

const Product = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found 29 items for you!</p>
          <div className="flex items-center gap-2 p-2 border-2 border-[#cacaca] rounded-xl hover:shadow">
            <AiOutlineAppstore />
            <label for="show">Show: </label>
            <select id="show" className="outline-0">
              <option value="">50</option>
              <option value="">100</option>
              <option value="">150</option>
              <option value="">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
};

export default Product;
