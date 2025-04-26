import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const ProductListItem = () => {
  return (
    <div className="flex">
      <img src="/Trendy1.png" alt="product" className="max-w-28" />
      <div>
        <h3 className="text-primary font-bold text-sm md:text-base">
          Nestle Original Coffee-Mate Coffee Creamer
        </h3>
        <div className="flex gap-3 py-2.5">
          <ul className="flex text-amber-400">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <p className="text-xs font-normal text-secondary">(4.0)</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <h4 className=" text-sm md:text-lg font-bold text-brand">
            $28.85{" "}
            <span className="text-secondary text-base line-through">$32.8</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
