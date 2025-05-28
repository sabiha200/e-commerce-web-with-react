import React, { useEffect, useState } from "react";
import { ProductItem } from "../utils/ProductItem";
import axios from "axios";

export const PopularProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products",
        params: { page: "1", limit: "10" },
        headers: { accept: "application/json" },
      };

      try {
        const res = await axios.request(options);
        console.log("Full API response:", res.data);
        setProductList(res.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    api();
  }, []);
  productList.length = 10;
  return (
    <section>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-7 md:items-end">
          <h2 className="sectn_heading">Popular Products</h2>
          <ul className="flex flex-wrap gap-2 md:gap-7 text-base font-light text-primary">
            <li>
              <button className="hover:text-brand">All</button>
            </li>
            <li>
              <button className="hover:text-brand">Milks and Dairies</button>
            </li>
            <li>
              <button className="hover:text-brand">Coffes & Teas</button>
            </li>
            <li>
              <button className="hover:text-brand">Pet Foods</button>
            </li>
            <li>
              <button className="hover:text-brand">Vegetables</button>
            </li>
            <li>
              <button className="hover:text-brand">Fruits</button>
            </li>
          </ul>
        </div>
        <div className="py-11 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-x-auto gap-x-6 gap-y-8">
          {productList.map((item) => (
            <ProductItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
