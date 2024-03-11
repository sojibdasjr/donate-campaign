import React, { useState } from "react";
import SingleHomeContent from "./SingleHomeContent";

const HomeContents = ({ searchQueray }) => {
  const [loader, setLoader] = useState(true);
  const [items, setItems] = useState([]);
  useState(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setLoader(false);
      });
  }, []);
  return (
    <div className="bg-white text-black pt-16 pb-10">
      {loader === true ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-4 mx-4 md:mx-14 ">
          {items
            .filter((val) => {
              if (searchQueray === "") {
                return val;
              } else if (
                val.category.toLowerCase().includes(searchQueray.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <SingleHomeContent key={item.id} item={item}></SingleHomeContent>
            ))}
        </div>
      )}
    </div>
  );
};

export default HomeContents;
