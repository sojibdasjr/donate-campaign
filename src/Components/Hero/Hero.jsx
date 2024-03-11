import React from "react";

const Hero = () => {
  // search incliment
  return (
    <div
      className="hero h-[620px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/HzfZ49N/Rectangle-4281.png)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" text-black ">
          <h1 className="mb-5 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item bg-white "
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="indicator">
              <button className=" btn border-none join-item text-white bg-red-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
