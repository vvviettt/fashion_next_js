import ImageSlice from "@/components/ImageSlide";
import { useMemo } from "react";
import office from "@/assets/banners/office_lady.webp";
import endLess from "@/assets/banners/end_less_summer.webp";
import flower from "@/assets/banners/flower_summer.webp";
import colorOf from "@/assets/banners/color_of_your_life.webp";
import banner199k from "@/assets/banners/199k.jpg";
import ProductCategory from "@/components/ProductCategory/ProductCategory";
import { homepageProductSection } from "@/constant/data";
import Banner from "@/components/Banner";
import NewsBanner from "@/components/NewsBanner";

export const metadata = {
  title: "Trang chủ",
  description: "Trang chủ",
};

export default function Home() {
  const data = useMemo(
    () => [
      {
        imageUrl: office.src,
        path: "",
      },
      {
        imageUrl: endLess.src,
        path: "",
      },
      {
        imageUrl: colorOf.src,
        path: "",
      },
      {
        imageUrl: flower.src,
        path: "",
      },
    ],
    []
  );
  return (
    <>
      <ImageSlice data={data} />
      {homepageProductSection.map((val, index) => {
        return (
          <ProductCategory
            key={index}
            categoryName={val.categoryName}
            products={val.products}
          />
        );
      })}
      <Banner imageUrl={banner199k.src} />
      <div className="max-w-[1280px] mx-auto">
        <NewsBanner />
      </div>
    </>
  );
}
