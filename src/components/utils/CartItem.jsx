import React from "react";

const CartItem = ({data}) => {
  return (
    <tr>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-9 pl-8">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src={Array.isArray(data.productData.images) ? data.productData.images[0] :data.productData.images} alt="product" />
          </div>
          <p className="text-base text-secondary">
            {data?.productData?.title}
          </p>
        </div>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="text-base text-secondary text-center">${data.productData.prices}</p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="w-8 h-8 border flex justify-center items-center m-auto">
         {data.quantity}
        </p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-12 justify-center">
          <p>${data?.quantity * data?.productData?.prices}</p>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
