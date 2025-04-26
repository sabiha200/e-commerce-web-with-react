import React from "react";
import { Link } from "react-router";
import DealCard from "../Home/DealCard";

const DealsOfDay = () => {
  return (
    <section className="xl:pb-48 lg:pb-31 sm:pb-12 pb-6 ">
      <div className="container">
        <div className="flex justify-between flex-col sm:flex-row items-center md:items-end">
          <h2 className="sectn_heading">Deals Of Day</h2>
          <Link to="/" className="text-primary font-semibold">
            {" "}
            All Deals{" "}
          </Link>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <DealCard />
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
      </div>
    </section>
  );
};

export default DealsOfDay;
