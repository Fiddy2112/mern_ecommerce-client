import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Notification from "../components/Notification";
import Products from "../components/Products";
import Slide from "../components/Slider";

function Home() {
  return (
    <div>
      <Notification />
      <Navbar />
      <Slide />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
