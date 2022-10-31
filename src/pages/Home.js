import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";
import Slide from "../components/Slider";

function Home() {
  return (
    <div>
      <Notification />
      <Navbar />
      <Slide />
      <Categories />
    </div>
  );
}

export default Home;
