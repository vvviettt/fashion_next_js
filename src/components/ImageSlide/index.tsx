"use client";
import { FC, use } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface ImageSliceProps {
  aspect?: string;
  data: {
    imageUrl: string;
    path: string;
  }[];
}
const ImageSlice: FC<ImageSliceProps> = ({ data, aspect = "9/4" }) => {
  return (
    <>
      <Slide nextArrow={<></>}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full aspect-[${aspect}] bg-cover `}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
          );
        })}
      </Slide>
    </>
  );
};

export default ImageSlice;
