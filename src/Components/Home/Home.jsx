import React, { useState } from "react";
import Hero from "../Hero/Hero";
import HomeContents from "../HomeContent/HomeContents";

const Home = () => {
  const [searchQueray, setSearchQueray] = useState("");

  return (
    <div>
      <Hero setSearchQueray={setSearchQueray} />
      <HomeContents searchQueray={searchQueray} />
    </div>
  );
};

export default Home;
