import React, { useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { ProductItem } from "../utils/ProductItem";
import axios from "axios";

const Product = () => {
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
        console.log(res.data);         
        setProductList(res.data)
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    api();
  }, []);
  
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found {productList.length} items for you!</p>
          <div className="flex items-center gap-2 p-2 border-2 border-[#cacaca] rounded-xl hover:shadow">
            <AiOutlineAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show" className="outline-0">
              <option value="">50</option>
              <option value="">100</option>
              <option value="">150</option>
              <option value="">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

          {
          productList.map((item) => (
          <ProductItem key={item.id} data={item} />
          ))}
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}
        </div>
      </div>
    </section>
  );
};

export default Product;
