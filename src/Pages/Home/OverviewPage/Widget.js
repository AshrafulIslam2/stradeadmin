import React from "react";
import {
  AiFillAppstore,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineDollar,
} from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";

const Widget = () => {
  //temporary

  return (
    <div className="grid sm:grid-cols-1s md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 ">
      <div className="flex justify-between items-center bg-violet-300 py-5 px-5 rounded-lg hover:shadow-xl  ">
        <div>
          <h1 className="text-white font-medium  md:text-lg text-xl">
            Total User
          </h1>
          <h1
            className="text-white font-bold text-3xl
          "
          >
            5000
          </h1>
        </div>
        <div className="">
          <div className="rounded-full border-4 border-black">
            <AiOutlineUser className="text-3xl" />
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center bg-emerald-300 py-5 px-5 rounded-lg hover:shadow-xl">
        <div>
          <h1 className="text-white font-medium md:text-lg text-xl">
            Total Products
          </h1>
          <h1
            className="text-white font-bold text-3xl
          "
          >
            8000
          </h1>
        </div>
        <div className="">
          <div className=" rounded-full border-4 border-black">
            <TbFileInvoice className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="bg-red-300 flex justify-between items-center py-5 px-5 rounded-lg hover:shadow-xl">
        <div>
          <h1 className="text-white font-medium md:text-lg text-xl">
            Total Order
          </h1>
          <h1
            className="text-white font-bold text-3xl
          "
          >
            100000
          </h1>
        </div>
        <div className="">
          <div className="rounded-full border-4 border-black">
            <AiOutlineShoppingCart className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-cyan-300 py-5 px-5 rounded-lg hover:shadow-xl">
        <div>
          <h1 className="text-white font-medium  md:text-lg text-xl">
            Total Earning
          </h1>
          <h1 className="text-white font-bold text-3xl">5000</h1>
        </div>
        <div className="">
          <div className=" rounded-full border-4 border-black">
            <AiOutlineDollar className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
