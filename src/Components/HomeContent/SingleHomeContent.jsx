import React from "react";

const SingleHomeContent = ({ item }) => {
  const { id, category, title, image, bg_color } = item;

  return (
    // <div className={` rounded pb-3 bg-${bg_color}-300 cursor-pointer`}>

    <div
      className={` ${
        (bg_color === "blue" && "bg-blue-100 text-blue-800") ||
        (bg_color === "red" && "bg-red-100 text-red-800") ||
        (bg_color === "orange" && "bg-orange-100 text-orange-800") ||
        (bg_color === "green" && "bg-green-100 text-green-800")
      } rounded pb-3 cursor-pointer`}
    >
      <img src={image} className="w-full" alt="" />

      <h1
        className={` ${
          (bg_color === "blue" && "bg-blue-300 ") ||
          (bg_color === "red" && "bg-red-300 ") ||
          (bg_color === "orange" && "bg-orange-300 ") ||
          (bg_color === "green" && "bg-green-300 ")
        } text-center py-0.5  font-semibold  w-20 rounded  m-2`}
      >
        {category}
      </h1>

      <h1 className={` mx-2 font-semibold `}>{title}</h1>
    </div>
  );
};

export default SingleHomeContent;
