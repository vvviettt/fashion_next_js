"use client";
import JsonQuery from "json-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import json from "@/constant/products.json";
import { FormData } from "../ProductForm";
import Link from "next/link";

const CartContent = () => {
  const [cartStorage, setCartStorage] = useLocalStorage<FormData[]>("cart", []);
  const [cart, setCart] = useState<FormData[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setCart(cartStorage ?? []);
  }, [cartStorage]);

  useEffect(() => {
    setProducts([]);
    setPrice(0);
    cart.forEach((val) => {
      const product = JsonQuery(`all[0][**].products[*id=${val.product_id}]`, {
        data: json,
      }).value[0];
      setProducts((pre) => [...pre, product]);
      setPrice((prev) => prev + product.price * val.count);
    });
  }, [cart]);

  const handleRemoveFromCart = (id: string) => {
    setCartStorage(
      cartStorage.filter(function (item) {
        return item.product_id !== id;
      })
    );
  };

  const handleChangCount = (id: string, count: number) => {
    setCartStorage(
      cartStorage.map(function (item) {
        if (item.product_id === id) {
          return { ...item, count: item.count + count };
        }
        return item;
      })
    );
  };

  return (
    <>
      {products.length > 0 && (
        <>
          {" "}
          {products.map((product, index) => {
            return (
              <div key={product.id} className="flex">
                <div className="w-1/2 flex py-4">
                  <div className="w-1/2">
                    <Image
                      src={product.images[0]}
                      alt={""}
                      width={160}
                      height={240}
                    />
                  </div>
                  <div className="w-1/2 flex flex-col justify-center">
                    <p className="text-[20px] font-bold text-text">
                      {product.name}
                    </p>
                    <p className="pt-3 text-text text-[14px]">
                      Thương hiệu :{" "}
                      <span className=" uppercase">{product.brand}</span>
                    </p>
                    <div
                      className=" flex justify-start pt-2"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <button className=" text-red-400">Xóa</button>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex">
                  <div className="w-1/3 flex items-center justify-center h-full">
                    <p>{new Intl.NumberFormat().format(product.price)}</p>
                  </div>
                  <div className="w-1/3 h-full flex items-center justify-center">
                    <div className="border border-slate-300 flex items-center">
                      <div
                        className="px-2 py-1.5"
                        onClick={(e) => {
                          if (cart[index].count > 1) {
                            handleChangCount(product.id, -1);
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
                      <p className=" w-14 outline-none text-center">
                        {cart[index].count}
                      </p>

                      <div
                        className="px-2 py-1.5"
                        onClick={(e) => {
                          handleChangCount(product.id, 1);
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
                  </div>
                  <div className="w-1/3 flex h-full items-center justify-end">
                    <p>
                      {new Intl.NumberFormat().format(
                        cart[index].count * product.price
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-[#8a8a8f] mt-5 mb-10">
            <div className="py-4">
              <p className="text-[20px] font-semibold text-end">
                Thành tiền :{" "}
                {new Intl.NumberFormat().format(
                  products.reduce((prev, val, index) => {
                    return prev + val.price * cart[index].count;
                  }, 0)
                )}
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                href={"/checkout"}
                className="bg-black text-white px-6 py-3 rounded-full"
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartContent;
