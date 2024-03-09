import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../Utillitys/localStroage";

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
  console.log(displayItem);
  return (
    <div>
      <h1>Donation {displayItem.length}</h1>
    </div>
  );
};

export default Donation;
