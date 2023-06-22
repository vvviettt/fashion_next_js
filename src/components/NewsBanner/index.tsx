"use client";
import { news } from "@/constant/data";
import { Slide } from "react-slideshow-image";
import NewsItem from "../NewsItem";
import "react-slideshow-image/dist/styles.css";

const NewsBanner = () => {
  return (
    <div className="m mx-[-6px] mt-20">
      <Slide slidesToScroll={1} slidesToShow={3} cssClass="gap">
        {news.map((item) => {
          return <NewsItem key={item.id} {...item} />;
        })}
      </Slide>
    </div>
  );
};

export default NewsBanner;
