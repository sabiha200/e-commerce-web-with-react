import React from "react";
import Breadcramp from "../components/utils/Breadcramp";
import CartItem from "../components/utils/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart)
  let sum = 0;
  cartData.forEach(item => {
    sum  += item.quantity * item.productData.prices
    
  });
  return (
    <section>
      <div className="py-8 border border-[#CACACA]">
        <div className="container">
          <Breadcramp />
        </div>
      </div>
      <div className="container py-12">
        <h2 className="text-6xl text-primary font-bold">Your Cart</h2>
        <p className="text-secondary font-normal py-6">
          There are 3 products in your cart
        </p>
        <div className="flex gap-4">
          <table className="w-9/12">
            <tr>
              <th className="bg-[#e9e8e8] py-4 text-base">Product</th>
              <th className="bg-[#e9e8e8] py-4 text-base">Unit Price</th>
              <th className="bg-[#e9e8e8] py-4 text-base">Quantity</th>
              <th className="bg-[#e9e8e8] py-4 text-base">Subtotal</th>
            </tr>
            <tbody>
              {
                cartData.map((item)=>(
                  <CartItem key={item.productData.id} data={item}/>
                ))
              }
            </tbody>
          </table>
          <div className="w-3/12 px-16 pt-4 pb-12 bg-[#e9e8e8] text-center h-fit">
            <h3 className="font-primary font-semibold text-3xl mb-16">
              Cart Totals
            </h3>
            <div className="flex gap-20">
              <div className="font-bold ">
                <div className="pb-4">Subtotal</div>
                <div>Total</div>
              </div>
              <div className="text-secondary">
                <div className="pb-4">${sum}</div>
                <div>${sum}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
