import React from "react";
import MainCarousel from "../../components/customer/Home/Maincarousel";
import HomeSectionCarousel from "../../components/customer/Home/HomeSectionCarousel";
import { mens_kurta } from "../../components/customer/Data/mens_kurta";

const Home = () => {
  return (
    <>
      <MainCarousel />

      <div className="py-20 space-y-10 flex-col justify-center px-15 lg:px-10">
        <HomeSectionCarousel sectionName={"Men's Kurta"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Men's Shoes"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Men's Shirt"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Women's Saree"} data={mens_kurta} />
        <HomeSectionCarousel sectionName={"Women's Dress"} data={mens_kurta} />
      </div>
    </>
  );
};

export default Home;
