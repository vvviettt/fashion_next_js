/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect, useState } from "react";
import select from "@/assets/icons/select-pro1.webp";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import json from "@/constant/products.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "./swipper.css";
import JsonQuery from "json-query";
import { useParams } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";

export interface ProductFormProps {
  image: string[];
  id: string;
  code: string;
  branch: string;
  name: string;
  price: number;
  size: { id: string; name: string; isHave: boolean }[];
  color: { id: string; code: string }[];
  material: string;
  style: string;
}

const schema = yup.object({
  product_id: yup.string().required(),
  colorId: yup.string().required(),
  sizeId: yup.string().required(),
  count: yup.number().min(1).max(100).required(),
});

export type FormData = yup.InferType<typeof schema>;

const ProductForm: FC<ProductFormProps> = () => {
  const params = useParams();
  const result = JsonQuery(`all[0][**].products[*id=${params.productId}]`, {
    data: json,
  }).value[0];
  const { id, name, brand, price, size, material, style, images, colors } =
    result;
  const [imgSelect, setImgSelect] = useState(images[0]);
  const [cart, setCart] = useLocalStorage<FormData[]>("cart", []);
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { count: 1 },
  });
  const onSubmit = (data: FormData) => {
    const haveData = cart.find((item) => {
      return item.product_id == data.product_id;
    });

    if (haveData) {
      setCart(
        cart.map((item) => {
          if (item.product_id === data.product_id) {
            return data;
          }
          return item;
        })
      );
    } else {
      setCart([...cart, data]);
    }
  };
  useEffect(() => {
    setValue("product_id", id);
    setValue("colorId", colors[0].id);
    for (let i = 0; i < size.length; i++) {
      if (size[i].isHave) {
        setValue("sizeId", size[i].id);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <div className="w-2/3 flex gap-2">
        <div className="w-[200px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            height={930}
            direction="vertical"
            modules={[FreeMode]}
            className="mySwiper"
          >
            {images.map((i: string) => {
              return (
                <SwiperSlide
                  key={i}
                  onClick={() => {
                    setImgSelect(i);
                  }}
                >
                  <img src={i} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-[620px] h-[930px]">
          <Image
            src={imgSelect}
            alt=""
            width={1000}
            height={930}
            className="w-100%"
          />
        </div>
      </div>
      <div className="w-1/3 md:pl-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-[14px] leading-7 font-semibold text-text pb-4 uppercase">
            {name}
          </h3>
          <div className="mb-4">
            <p className="text-[12px] text-text text-opacity-80">
              Thương hiệu: <span className=" uppercase">{brand}</span>
              <br /> Mã SP: 190VC6WED77DS77S8888
            </p>
          </div>
          <div className="mb-4">
            <p className="text-text font-bold">
              {new Intl.NumberFormat().format(price)} đ
            </p>
          </div>
          <div className="pb-2">
            <p className="font-semibold text-text text-[14px]">Kích thước</p>
            <div className="flex gap-1 flex-wrap">
              <Controller
                name={"sizeId"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    {size.map((it: any) => (
                      <div
                        className="my-1 px-3 py-0.5 border relative flex items-center h-[30px] cursor-pointer"
                        key={it.id}
                        onClick={() => {
                          onChange(it.id);
                        }}
                      >
                        <p className="text-text text-[14px]">{it.name}</p>
                        {value == it.id && (
                          <div
                            className="absolute w-[30px] h-[30px] right-0 "
                            style={{ backgroundImage: `url(${select.src})` }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
          <div>
            <p className=" font-semibold text-text text-[14px]">Màu</p>
            <Controller
              name={"colorId"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <div className="flex gap-1 flex-wrap">
                  {colors.map((it: any) => (
                    <div
                      key={it.id}
                      className={classNames(`w-8 h-8 rounded-full my-1`, {
                        "border border-text": value === it.id,
                      })}
                      style={{ backgroundColor: it.code }}
                    ></div>
                  ))}
                </div>
              )}
            />
          </div>
          <div className="mt-2 cursor-pointer">
            <p className="uppercase text-[14px] underline">
              Hướng dẫn chọn size
            </p>
          </div>
          <div className="flex mt-5 gap-3">
            <p className="text-[14px] leading-4 text-text contents font-semibold">
              Số lượng
            </p>
            <Controller
              name={"count"}
              control={control}
              render={({ field: { value } }) => (
                <div className="border border-slate-300 flex items-center">
                  <div
                    className="px-2 py-1.5"
                    onClick={(e) => {
                      if (value > 1) {
                        setValue("count", value - 1);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className=" w-14 outline-none text-center"
                    value={value}
                    onChange={(e) => {
                      //   var regex = /^[a-zA-Z]+$/;
                      const count = parseInt(e.target.value);
                      if (count) {
                        setValue("count", count);
                      }
                    }}
                  />
                  <div
                    className="px-2 py-1.5"
                    onClick={(e) => {
                      setValue("count", value + 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="pt-5 flex flex-col gap-3">
            <button
              className="border-[0.5px] border-text w-full py-2"
              type="submit"
            >
              <span>Thêm vào giỏ hàng</span>
            </button>
            <button
              className="border-[0.5px] border-text w-full py-2 bg-text"
              type="submit"
            >
              <span className="text-white">Mua ngay</span>
            </button>
          </div>
          <div className="mt-3">
            <p className="text-text text-[14px] leading-5">
              <span className="font-semibold">Chất liệu : </span>
              {material}
            </p>
            <p className="text-text text-[14px] leading-5">
              <span className="font-semibold">Kiểu dáng : </span>
              {style}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
