/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Col3 from "@/assets/icons/3col.webp";
import Col2 from "@/assets/icons/2col.webp";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";
import ReactPaginate from "react-paginate";

const ListProduct: FC<{
  products?: any[];
  name: string;
  currentPage: number;
  max: number;
}> = ({ products = [], name, currentPage, max }) => {
  const router = useRouter();
  const pathName = usePathname();
  const query = useSearchParams();

  return (
    <div className="w-[1280px] mx-auto">
      <div className="flex px-2 py-9 items-center justify-between">
        <p className=" uppercase text-text text-base font-semibold">{name}</p>
        <div className="flex items-center gap-4">
          <div
            className=""
            onClick={() => {
              const searchParams = new URLSearchParams(query.toString());
              searchParams.delete("col");
              searchParams.append("col", "2");
              router.replace(`${pathName}?${searchParams.toString()}`);
            }}
          >
            <img src={Col2.src} alt="" />
          </div>
          <div
            className=""
            onClick={() => {
              const searchParams = new URLSearchParams(query.toString());
              searchParams.delete("col");
              searchParams.append("col", "3");
              router.replace(`${pathName}?${searchParams.toString()}`);
            }}
          >
            <img src={Col3.src} alt="" />
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-y-5">
        {products.map((item: any) => {
          return (
            <div
              key={item.id}
              className={classNames("w-1/3", {
                "w-1/2": query.get("col") === "2",
              })}
            >
              <ProductItem product={{ ...item, thumbnail: item.images[0] }} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-10">
        <ReactPaginate
          containerClassName="flex items-center gap-6"
          pageLinkClassName=""
          breakLabel="..."
          pageCount={max}
          onPageChange={({ selected }) => {
            const searchParams = new URLSearchParams(query.toString());
            searchParams.delete("page");
            searchParams.append("page", (selected + 1).toString());
            router.replace(`${pathName}?${searchParams.toString()}`);
          }}
          initialPage={currentPage}
          pageClassName="w-10 h-10 flex justify-center items-center"
          activeClassName=" bg-black text-white"
          pageRangeDisplayed={3}
          selectedPageRel={"1"}
          previousLabel={"<"}
          nextLabel=">"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ListProduct;
