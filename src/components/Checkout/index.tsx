"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import json from "@/constant/products.json";
import JsonQuery from "json-query";
import { FormData } from "../ProductForm";

const Checkout = () => {
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
  return (
    <div className="flex-1">
      <div className="border-b border-[#717171] flex flex-col gap-5 pb-5">
        {products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="flex justify-between items-center "
            >
              <div className="flex gap-3">
                <div
                  className=" relative w-16 h-16 bg-cover border border-[#717171] rounded-lg"
                  style={{ backgroundImage: `url(${product.images[0]})` }}
                >
                  <div className=" absolute w-5 h-5 bg-red-300 flex justify-center items-center top-[-5px] left-[-5px] text-white rounded-full">
                    {cart[index].count}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p>{product.name}</p>
                  <p>{"Size 6"}</p>
                </div>
              </div>
              <div className="">
                <p>
                  {new Intl.NumberFormat().format(
                    cart[index].count * product.price
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-5">
        <p className="text-[20px] font-semibold text-text text-end">
          Tạm tính: {new Intl.NumberFormat().format(price)}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
