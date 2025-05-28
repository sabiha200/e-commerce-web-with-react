import React from "react";

export const Provide = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white p-5 rounded-xl border border-gray-300">
      <img src="/icon-1.svg" alt="discount" className="w-30 h-30" />
      <div className="text-center m-auto">
        <h4 className="font-semibold text-2xl pb-3">Best prices & offers</h4>
        <p className="w-94 pb-4 text-gray-500 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      </div>
    </div>
  );
};
