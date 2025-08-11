import React from "react";
import { IoCartOutline } from "react-icons/io5";

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex flex-col mt-6 bg-gray-100 shadow-md bg-clip-border w-96">
          <div className="p-6 flex flex-wrap items-center justify-center">
            <IoCartOutline className="text-7xl" />
            <h5 className="block mt-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal w-full text-center">
              Your cart is empty
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
