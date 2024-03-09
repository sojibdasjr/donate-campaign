import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../Utillitys/localStroage";
import SingleDonation from "./SingleDonation";

const Donation = () => {
  const [displayItem, setDisplayItem] = useState([]);
  const items = useLoaderData();
  const allData = items.items;

  useEffect(() => {
    const donationLS = getDonation();
    if (allData.length > 0) {
      const giveDonation = allData.filter((data) =>
        donationLS.includes(data.id)
      );
      setDisplayItem(giveDonation);
    }
  }, []);

  return (
    <div className="bg-white pt-[76px]">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {displayItem.map((item) => (
          <SingleDonation key={item.id} item={item}></SingleDonation>
        ))}
      </div>
    </div>
  );
};

export default Donation;
