"use client";
import { FC } from "react";
import { ProductItem as ProductItemProps } from "../ProductItem/ProductItem.type";
import ProductItem from "../ProductItem/ProductItem";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export interface ProductCategoryProps {
  categoryName: string;
  products: ProductItemProps[];
}

const ProductCategory: FC<ProductCategoryProps> = ({
  categoryName,
  products,
}) => {
  return (
    <div className="pt-20">
      <p className="text-center text-[32px] leading-[54px] text-text uppercase font-semibold mb-[30px]">
        {categoryName}
      </p>
      <div className="w-[1280px] mx-auto">
        <Slide slidesToScroll={1} slidesToShow={4}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ProductCategory;
