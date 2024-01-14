import React from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

export default function Cart() {
  const text = "Autumn Limited Edition Sneakers";

  return (
    <>
    <div className="cart">
      <article
        className="bg-white rounded-2xl shadow-xl p-8 right-30 left-30 w-10 top-30 absolute lg:w-96 lg:left-auto lg:top-30"
        style={{
          zIndex: 1000,
        }}
      >
        <div className="cart-header">
            <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
        </div>
        
        <div className="products-in-cart">Your cart is empty
            <div className="flex items-center justify-between">
                <img src={thumbnail} alt="" className="rounded-lg w-14" />
                <ul>
                    <li className="text-slate-600 text-sm">
                        {`${text.substring(
                        0,
                        23
                        )}...`}
                    </li>
                    <li className="text-slate-600 text-sm">
                        $125.00 x 3{" "}
                        <span className="font-bold text-slate-900">$375.00</span>
                    </li>
                </ul>

                <button>
                    <img src={iconDelete} alt="" />
                </button>
            </div>
        </div>
        <div className="checkout">
            <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
            Checkout
            </button>
        </div>
      </article>
    </div>
    </>
  );
}