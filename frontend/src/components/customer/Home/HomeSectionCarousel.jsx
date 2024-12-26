import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Button from "@mui/material/Button";
import HomeSectionCard from "./HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../Data/mens_kurta";

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = ()=> {setactiveIndex(activeIndex-1) ; 
  console.log(activeIndex);}
  
  const slideNext = ()=> setactiveIndex(activeIndex+1)
  const syncActiveIndex = ({item}) =>setactiveIndex(item)

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="relative border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 lg:px-10">{sectionName}</h2>
      <div className=" p-5">
        <AliceCarousel
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlayInterval={1000}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      {activeIndex !== 0 &&<Button
        variant="contained"
        className="z-50"
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          bgcolor: "white",
          zIndex: 10,
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>}

     {
      activeIndex !== items.length-5 &&  <Button
        variant="contained"
        className="z-50"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translate(50%, -50%) rotate(-90deg)",
          bgcolor: "white",
          zIndex: 10,
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(-90deg)", color: "black" }}
        />
      </Button>
     }
    </div>
  );
};

export default HomeSectionCarousel;