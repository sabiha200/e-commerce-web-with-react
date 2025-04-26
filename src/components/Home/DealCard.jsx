import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const DealCard = () => {
  return (
    <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 relative group mb-48 sm:mb-46 md:mb-36 lg:mb-10">
      <div>
        <img src="/dealbg.png" alt="" className="w-full " />
      </div>
      <div className="w-5/6 absolute top-1/2 left-1/2 transition-all -translate-x-1/2 group-hover:-translate-y-5">
        <div className="flex gap-3.5 justify-center mb-4">
          <div className="p-3.5 rounded-lg bg-white text-center">
            <p className="text-brand">22</p>
            <p className="text-secondary">Days</p>
          </div>
          <div className="p-3.5 rounded-lg bg-white text-center">
            <p className="text-brand">22</p>
            <p className="text-secondary">Days</p>
          </div>
          <div className="p-3.5 rounded-lg bg-white text-center">
            <p className="text-brand">22</p>
            <p className="text-secondary">Days</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow py-6 px-7">
          <h3 className="text-primary font-bold text-sm md:text-base">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
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
          <p className="text-sm font-normal text-secondary">
            {" "}
            By <span className="text-brand font-bold">NestFood</span>{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-between pt-6">
            <h4 className=" text-sm md:text-lg font-bold text-brand">
              $28.85{" "}
              <span className="text-secondary text-base line-through">
                $32.8
              </span>
            </h4>
            <button className="flex items-center bg-[#DEF9EC] text-brand font-bold text-lg md:px-5 p-2 md:py-2.5 rounded-sm cursor-pointer">
              <IoCartOutline />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
