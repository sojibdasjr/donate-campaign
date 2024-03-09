import React from "react";
import { Link } from "react-router-dom";

const SingleDonation = ({ item }) => {
  const { id, category, image, title, donation_price, bg_color, text_color } =
    item;

  return (
    <div
      className={`${
        (bg_color === "blue" && "bg-blue-200 text-blue-800") ||
        (bg_color === "red" && "bg-red-200 text-red-800") ||
        (bg_color === "orange" && "bg-orange-200 text-orange-800") ||
        (bg_color === "green" && "bg-green-200 text-green-800")
      }  flex items-center gap-4 mx-4 md:mx-16 mb-2 rounded`}
    >
      <div>
        <img className="w-[325px] h-[176px]" src={image} alt="" />
      </div>
      <div>
        <p
          className={` ${
            (bg_color === "blue" && "bg-blue-300 ") ||
            (bg_color === "red" && "bg-red-300 ") ||
            (bg_color === "orange" && "bg-orange-300 ") ||
            (bg_color === "green" && "bg-green-300 ")
          } text-center font-semibold  w-20 rounded m-2`}
        >
          {category}
        </p>
        <h1 className="text-black font-bold">{title}</h1>
        <p className="font-bold">{donation_price}</p>
        <Link>
          {" "}
          <button
            className={` ${
              (bg_color === "blue" && "bg-blue-400 ") ||
              (bg_color === "red" && "bg-red-400 ") ||
              (bg_color === "orange" && "bg-orange-400 ") ||
              (bg_color === "green" && "bg-green-400 ")
            }  font-semibold  p-1 rounded  m-2`}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleDonation;
