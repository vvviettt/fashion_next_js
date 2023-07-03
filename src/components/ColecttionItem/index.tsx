import { FC } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { productDetail } from "@/constant/data";
import Link from "next/link";
import classNames from "classnames";

const CollectionItem: FC<{ collection: any; index: number }> = ({
  collection,
  index,
}) => {
  return (
    <div className="max-w-[1280px] mx-auto py-10">
      <div
        className="w-full aspect-[9/4] bg-cover"
        style={{ backgroundImage: `url(${collection.banner})` }}
      ></div>
      <div
        className={classNames("pt-4 flex justify-between", {
          "flex-row-reverse": index % 2 === 0,
        })}
      >
        <div className="w-[60%]">
          <div className="flex flex-wrap ">
            {collection.products.slice(0, 4).map((product: any) => {
              return (
                <div className="w-1/2" key={product.id}>
                  <ProductItem product={product} />
                </div>
              );
            })}
          </div>
          <div className="py-4 px-2">
            <h3 className="text-center text-xl pb-5">{collection.name}</h3>
            <p>{collection.content}</p>
          </div>
          <div className="flex justify-end px-2">
            <Link href={`collection/${collection.id}`}>
              <button className="bg-black text-white px-6 py-3">
                Xem thêm
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          {collection.images.map((image: string, index: number) => {
            return (
              <div
                key={index}
                className="w-full aspect-[3/5] bg-cover"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
