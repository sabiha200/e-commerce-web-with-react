import React from "react";

const CartItem = () => {
  return (
    <tr>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-9 pl-8">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src="/Product.png" alt="product" />
          </div>
          <p className="text-base text-secondary">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="text-base text-secondary text-center">BDT. 345</p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="w-8 h-8 border flex justify-center items-center m-auto">
          2
        </p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-12 justify-center">
          <p>BDT. 32</p>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
