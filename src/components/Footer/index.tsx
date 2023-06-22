import Link from "next/link";
import payMethod from "@/assets/icons/image_method_3.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" py-[50px] max-w-[1280px] mx-auto flex">
        <div className="w-[40%]">
          <h3 className="text-[16px] h-[21px] mb-4 text-white font-medium">
            NEM FASHION - THỜI TRANG CHUẨN PHONG CÁCH
          </h3>
          <div className="pb-2">
            <p className="text-[13px] text-white font-light">
              Công ty TNHH Dịch vụ và Thương mại An Thành. <br />
              Số ĐKKD 0107861393, Sở KHĐT Tp. Hà Nội cấp ngày 04/10/2017
            </p>
          </div>
          <div className="pb-2">
            <p className="text-[13px] text-white font-light">
              Địa chỉ: Lô 1+2, Ô quy hoạch E.2/NO7 đường Lâm Hạ <br />
              phường Bồ Đề, quận Long Biên, Hà Nội
            </p>
          </div>
          <div className="pb-2">
            <p className="text-[13px] text-white font-light">
              Chăm sóc khách hàng: 0243.9388512 <br /> Mua hàng online:
              0246.2909098
            </p>
          </div>
          <div className="pb-2">
            <p className="text-[13px] text-white font-light ">
              Email: nemcskh@stripe-vn.com
            </p>
          </div>
        </div>
        <div className="w-[20%]">
          <div className="h-[21px] mb-4"></div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Giới thiệu
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Triết lý kinh doanh tại NEM Fashion
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                NEM&apos;s Blog
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Hệ thống showroom
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Liên hệ
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[20%]">
          <div className="h-[21px] mb-4"></div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Chính sách giao nhận - Vận chuyển
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Hướng dẫn thanh toán
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Tra cứu đơn hàng
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Hướng dẫn chọn Size
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Quy định đổi hàng
              </span>
            </Link>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <span className="text-[13px] text-white font-light hover:underline decoration-white">
                Quy định bảo hành và sửa chữa
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[20%]">
          <div className="h-[21px] mb-4"></div>
          <div className="pb-2">
            <span className="text-[13px] text-white font-light hover:underline decoration-white">
              Phương thức thanh toán
            </span>
          </div>
          <div className="pb-2">
            <Link href={"introduce"}>
              <Image src={payMethod.src} alt={""} height={35} width={55} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
