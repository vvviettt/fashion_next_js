import ListProduct from "@/components/ListProducts";
import json from "@/constant/collection.json";
import JsonQuery from "json-query";
import { useEffect } from "react";

const ListProductsPage = ({
  params,
  searchParams,
}: {
  params: { collectionId: string[] };
  searchParams: { page: string; view: string };
}) => {
  let data: any = json.all;
  let name: string[] = [];
  let banner: string | null = null;
  let rawProducts: Array<any> = [];

  //   useEffect(() => {}, []);
  rawProducts = JsonQuery(`[**].products`, {
    data: data,
  }).value;
  //   name = ["Tất cả sản phẩm"];
  name = [
    JsonQuery(`[**].[id=${params.collectionId}]`, {
      data: data,
    }).value.name,
  ];

  banner = JsonQuery(`[**].[id=${params.collectionId}]`, {
    data: data,
  }).value.banner;

  //   if (params.slugs === undefined) {
  //     rawProducts = JsonQuery(`[**].children[**].products`, {
  //       data: data,
  //     }).value;
  //     banner = json.banner;
  //   } else if (params.slugs.length === 1) {
  //     rawProducts = JsonQuery(
  //       `[*type=${params.slugs[0]}].children[**].products`,
  //       {
  //         data: data,
  //       }
  //     ).value;
  //     const query = JsonQuery(`[*type=${params.slugs[0]}]`, { data: data })
  //       .value[0];
  //     name = [query.name];
  //     banner = query.banner;
  //   } else {
  //     name = JsonQuery(`[*type=${params.slugs[0]}].name`, { data: data }).value;
  //     const query = JsonQuery(
  //       `[*type=${params.slugs[0]}].children[**].[*type=${params.slugs[1]}]`,
  //       {
  //         data: data,
  //       }
  //     ).value[0];

  //     name.push(query.name);
  //     banner = query.banner;
  //     rawProducts = query.products;
  //     console.log("hjhj", rawProducts);
  //   }

  const page: number = parseInt(searchParams.page ?? 1);

  const products = (rawProducts as Array<any>).slice(
    (page - 1) * 12,
    (page - 1) * 12 + 12
  );
  const maxPage = Math.ceil(rawProducts.length / 12);

  return (
    <>
      <div className="border-t border-b border-[#EFEFF4] h-[50px] flex items-center ">
        <div className="w-[1280px] mx-auto">
          <p className="text-[16px] text-text">
            Trang chủ {name.map((item) => ` / ${item}`)}
          </p>
        </div>
      </div>
      {banner && (
        <div
          className="w-full aspect-[9/4] bg-cover"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
      )}
      <ListProduct
        products={products}
        name={name[name.length - 1]}
        currentPage={page - 1}
        max={maxPage}
      />
    </>
  );
};

export default ListProductsPage;
