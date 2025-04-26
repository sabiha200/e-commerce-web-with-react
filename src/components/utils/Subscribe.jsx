import React from "react";
import { LuSend } from "react-icons/lu";

export const Subscribe = () => {
  return (
    <section className="pb-10">
      <div className="container  bg-[url(/Section.png)] bg-center bg-cover bg-no-repeat rounded-2xl py-20">
        <h2 className="font-bold text-primary text-[40px] max-w-xl">
          Stay home & get your daily needs from our shop
        </h2>
        <p className="text-secondary font-normal pt-5 pb-11">
          Start You'r Daily Shopping with{" "}
          <span className="text-brand">Nest Mart</span>
        </p>
        <div className="bg-white rounded-4xl max-w-md flex items-center justify-between">
          <LuSend className="text-secondary text-2xl mr-2 md:mr-0 ml-4" />
          <input
            type="email"
            placeholder="Your emaill address"
            className=" outline-0"
          />
          <button className="bg-brand rounded-4xl py-2 md:py-5 px-3 md:px-10 text-base w-40 text-white cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
