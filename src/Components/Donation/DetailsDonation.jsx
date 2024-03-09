import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../Utillitys/localStroage";

const DetailsDonation = () => {
  const items = useLoaderData();
  const data = items.items;
  const { id } = useParams();
  const IntId = parseInt(id);
  const newItem = data.find((item) => item.id === IntId);
  const { title, cover, donation_price, bg_color, description } = newItem;

  const handleDonate = () => {
    saveDonation(IntId);
    toast.success("Donation Successfully !!");
  };

  return (
    <div className="bg-white pt-[74px]">
      <div class="relative mx-4 md:mx-16 ">
        <img
          className="rounded-lg   bg-cover w-full md:h-[520px] lg:h-[720px] "
          src={cover}
          alt=""
        />
        <div class="absolute bottom-0 left-0 bg-black bg-opacity-50 rounded-lg w-full py-5 ">
          <button
            onClick={handleDonate}
            className={`
            ${
              (bg_color === "blue" && "bg-blue-400 text-blue-800") ||
              (bg_color === "red" && "bg-red-400 text-red-800") ||
              (bg_color === "orange" && "bg-orange-400 text-orange-800") ||
              (bg_color === "green" && "bg-green-400 text-green-800")
            }
            mx-4 md:mx-16 py-2 px-3 rounded font-bold`}
          >
            Donate {donation_price}
          </button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </div>

      <div className="mx-4 md:mx-16 my-16">
        <h1 className="text-4xl text-black font-bold pb-5">{title}</h1>
        <h1 className="text-black text-opacity-65 py-5">{description}</h1>
      </div>
    </div>
  );
};

export default DetailsDonation;
