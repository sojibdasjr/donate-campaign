import React, { useState } from "react";
import SingleHomeContent from "./SingleHomeContent";

const HomeContents = () => {
  const [items, setItems] = useState([]);
  useState(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);
  return (
    <div className="bg-white text-black pt-16 pb-10">
      <div className="grid md:grid-cols-4 gap-4 mx-4 md:mx-14 ">
        {items.map((item) => (
          <SingleHomeContent key={item.id} item={item}></SingleHomeContent>
        ))}
      </div>
    </div>
  );
};

export default HomeContents;
