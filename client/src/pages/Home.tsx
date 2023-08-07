import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
