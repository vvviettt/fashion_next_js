import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex items-center gap-1 relative py-2 group z-40 cursor-pointer">
      <div className="relative">
        <Image src={"/images/cart.webp"} alt="" width={20} height={20} />
        <div className="w-5 absolute top-1/2 translate-y-[-40%]  text-white text-center">
          0
        </div>
      </div>
      <p className="text-[14px] leading-5">Giỏ hàng</p>
      <div className="absolute w-72 right-0 top-[100%] hidden group-hover:block shadow-blur px-4 py-6 bg-white">
        <p className="font-light text-[14px]">
          Chưa có sản phẩm nào trong cửa hàng
        </p>
      </div>
    </div>
  );
};

export default Cart;
