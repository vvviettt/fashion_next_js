/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import { ProductItem } from "./ProductItem.type";
import Link from "next/link";

interface ProductItemProps {
  product: ProductItem;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="px-1.5 relative  group">
      <Link href={`/product/${product.id}`}>
        {" "}
        <div className=" relative overflow-hidden block">
          <div className="flex justify-center items-center absolute w-full h-full bg-black bg-opacity-40 right-[100%] group-hover:right-0 transition-all ease-in-out delay-150">
            <button
              className="px-3 py-1 border border-white z-50"
              onClick={() => {}}
            >
              <span className="text-white font-[14px]">Tư vấn</span>
            </button>
          </div>
          <img src={product.thumbnail ?? product.images[0]} alt="" />
        </div>
        <div className="flex flex-col items-center p-2.5">
          <p className="text-[14px] leading-[21px] h-[38px] font-semibold uppercase text-text text-opacity-50">
            {product.name}
          </p>
          <p className="text-[14px] leading-6 text-text font-bold">
            {new Intl.NumberFormat().format(product.price)} đ
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
