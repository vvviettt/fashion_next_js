"use client";
import { FormData } from "@/components/ProductForm";
import JsonQuery from "json-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import json from "@/constant/products.json";
import Link from "next/link";

const Cart = () => {
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

  return (
    <div className="flex items-center gap-1 relative py-2 group z-40 cursor-pointer">
      <div className="relative">
        <Image src={"/images/cart.webp"} alt="" width={20} height={20} />
        <div className="w-5 absolute top-1/2 translate-y-[-40%]  text-white text-center">
          {cart?.length}
        </div>
      </div>
      <p className="text-[14px] leading-5">Giỏ hàng</p>
      <div className="absolute w-72 right-0 top-[100%] hidden group-hover:block shadow-blur px-4 py-6 bg-white cursor-default">
        {!cart?.length && (
          <p className="font-light text-[14px]">
            Chưa có sản phẩm nào trong cửa hàng
          </p>
        )}
        {cart?.length > 0 && (
          <div className="">
            <div className="flex flex-col ">
              {products.map((product, index) => {
                return (
                  <div
                    key={product.id}
                    className="pb-3 border-b border-text mb-3"
                  >
                    <div className="flex gap-1">
                      <div className="flex flex-1 gap-2">
                        <div
                          className=" w-16 h-20 bg-cover"
                          style={{
                            backgroundImage: `url(${product.images[0]})`,
                          }}
                        ></div>
                        <div className="">
                          <p className="text-[14px] font-normal text-text">
                            {product.name}
                          </p>
                          <p className="text-[14px] font-normal text-text">
                            Số lượng : {cart[index].count}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <button
                          onClick={() => {
                            handleRemoveFromCart(product.id);
                          }}
                        >
                          <span className=" text-red-400">Xóa</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-[14px] font-normal text-text">
                        {new Intl.NumberFormat().format(product.price)} đ
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="flex justify-between">
                <p>Thành tiền : </p>
                <p>{new Intl.NumberFormat().format(price)}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <button className="bg-black text-white flex justify-center py-2 w-full">
                <span>Thanh toán ngay</span>
              </button>
              <Link
                href={"/cart"}
                className="text-text flex justify-center py-2 w-full border border-black"
              >
                <span>Xem giỏ hàng</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
