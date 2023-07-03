import Image from "next/image";
import Link from "next/link";

const AccountOption = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer relative py-2 group">
      <Image src={"/images/account.webp"} alt="" width={30} height={30} />
      <p className="text-[14px] leading-5">Tài khoản</p>
      <div className="absolute right-0 w-[200px] bg-white top-[100%] shadow-blur hidden group-hover:block">
        <Link href={"/auth"}>
          <div className="py-[15px] pl-5 hover:bg-black hover:bg-opacity-30 ">
            <p className="text-[14px] font-light">Đăng nhập</p>
          </div>
        </Link>
        <Link href={"/auth"}>
          <div className="py-[15px] pl-5 hover:bg-black hover:bg-opacity-30 ">
            <p className="text-[14px] font-light">Đăng ký</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountOption;
