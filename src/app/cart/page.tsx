import CartContent from "@/components/CartContent";

const CartPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-[32px] font-semibold uppercase py-7">Giỏ hàng</h2>
      <div className="flex py-7 border-y border-[#8a8a8f]">
        <div className="w-1/2">
          <p className="text-center">Sản phẩm</p>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/3">
            <p className="text-center">Giá</p>
          </div>
          <div className="w-1/3">
            <p className="text-center">Số lượng</p>
          </div>
          <div className="w-1/3">
            <p className="text-end">Thành tiền</p>
          </div>
        </div>
      </div>
      <CartContent />
    </div>
  );
};

export default CartPage;
