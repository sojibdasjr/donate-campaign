import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDonation } from "../Utillitys/localStroage";
import SingleDonation from "./SingleDonation";

const Donation = () => {
  const [displayItem, setDisplayItem] = useState([]);
  const [showAllDonation, setShowAllDonation] = useState(false);

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
      {displayItem.length <= 0 ? (
        <div className="text-black flex justify-center items-center h-[420px]    md:h-[700px]">
          <Link to="/" className="p-2 bg-green-400 rounded">
            {" "}
            Please Donation first
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mx-4 md:mx-16">
          {showAllDonation === true
            ? displayItem.map((item) => (
                <SingleDonation key={item.id} item={item}></SingleDonation>
              ))
            : displayItem
                .slice(0, 4)
                .map((item) => (
                  <SingleDonation key={item.id} item={item}></SingleDonation>
                ))}
        </div>
      )}
      <div className="flex items-center justify-center ">
        {displayItem.length >= 4 && (
          <button
            onClick={() => setShowAllDonation(true)}
            className={
              showAllDonation === true
                ? "hidden"
                : "text-white p-2 rounded bg-black my-5"
            }
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
