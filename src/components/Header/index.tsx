"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CategoryItemInterface } from "./Header.interface";
import CategoryItem from "./CategoryItem";
import SearchBtn from "./SearchBtn";
import AccountOption from "./AccountOption";
import Cart from "./Cart";

const Header = () => {
  const [categories] = useState<CategoryItemInterface[]>([
    {
      id: "products",
      path: "products",
      label: "Sản phẩm",
      child: [
        {
          id: "dam",
          label: "Đầm",
          path: "dam",
          child: [
            { id: "dam-suong", label: "Đầm suông", path: "dam-suong" },
            { id: "dam-dang-a", label: "Dầm dáng A", path: "dam-dang-a" },
            { id: "dam-om", label: "Đầm ôm", path: "dam-om" },
          ],
        },
        {
          id: "ao-so-mi",
          label: "Áo sơ mi",
          path: "ao-so-mi",
          child: [
            { id: "ngan-tay", label: "Ngắn tay", path: "ngan-tay" },
            { id: "dai-tay", label: "Dài tay", path: "dai-tay" },
            { id: "tay-lo", label: "Tay lỡ", path: "tay-lo" },
          ],
        },
        { id: "ao-kieu", label: "Áo kiểu", path: "ao-kieu" },
        { id: "ao-phong", label: "Áo phông", path: "ao-phong" },
        { id: "quan", label: "Quần", path: "quan" },
        { id: "chan-vay", label: "Chân váy", path: "chan-vay" },
        { id: "set", label: "Set bộ", path: "set" },
      ],
    },
    {
      id: "new-products",
      path: "products/new-products",
      label: "Sản phẩm mới",
    },
    {
      id: "collection",
      path: "collection",
      label: "Bộ sưu tập",
      child: [
        {
          id: "endless-summer",
          path: "638f6acf-e929-409f-9433-3f064b592522",
          label: "Endless summer",
        },
        {
          id: "nature-is-calling",
          path: "9c472747-6bbf-4332-9069-bdf73dc20755",
          label: "Nature is calling",
        },
        {
          id: "color-your-life",
          path: "a4914386-7d2c-4bb7-93cf-8305319ba8f3",
          label: "Color your life",
        },
        {
          id: "office-lady",
          path: "75a19fe4-fa54-45ae-b204-9bd72ea89630",
          label: "Office lady",
        },
      ],
    },
    // {
    //   id: "blog",
    //   path: "blogs",
    //   label: "nem shop blog",
    // },
    {
      id: "sale",
      path: "products/sale",
      label: "sale",
      child: [
        { id: "upto-50", path: "upto-50", label: "Sale up to 50%" },
        { id: "149k", path: "149k", label: "Chỉ từ 149k" },
      ],
    },
  ]);

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="max-w-[1280px] flex mx-auto items-center justify-between h-20">
        <div className="flex items-center ">
          <Link href={"/"}>
            <Image src={"/logo.webp"} width={100} height={100} alt={""} />
          </Link>
        </div>
        <div className="flex">
          {categories.map((category) => {
            return <CategoryItem category={category} key={category.id} />;
          })}
        </div>
        <div className="flex items-center gap-4">
          <SearchBtn />
          <AccountOption />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
