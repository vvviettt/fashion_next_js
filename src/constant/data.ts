import { ProductCategoryProps } from "@/components/ProductCategory/ProductCategory";
import product1 from "@/assets/products/product_1.webp";
import product2 from "@/assets/products/product_2.webp";
import product3 from "@/assets/products/product_3.webp";
import product4 from "@/assets/products/product_4.webp";
import product5 from "@/assets/products/product_5.webp";
import product6 from "@/assets/products/product_6.webp";
import product7 from "@/assets/products/product_7.webp";
import product8 from "@/assets/products/product_8.webp";
import product9 from "@/assets/products/product_9.webp";
import product10 from "@/assets/products/product_10.webp";
import product11 from "@/assets/products/product_11.webp";
import product12 from "@/assets/products/product_12.webp";
import { NewsItemProps } from "@/components/NewsItem";

import news1 from "@/assets/news/news_1.webp";
import news2 from "@/assets/news/news_2.webp";
import news3 from "@/assets/news/news_3.webp";
import news4 from "@/assets/news/news_4.webp";
import news5 from "@/assets/news/news_5.jpeg";
import news6 from "@/assets/news/news_6.webp";
import news7 from "@/assets/news/news_7.webp";
import news8 from "@/assets/news/news_8.webp";

import detail1 from "@/assets/imageDetail/product_1.webp";
import detail2 from "@/assets/imageDetail/product_2.webp";
import detail3 from "@/assets/imageDetail/product_3.webp";
import detail4 from "@/assets/imageDetail/product_4.webp";
import detail5 from "@/assets/imageDetail/product_5.webp";

export const homepageProductSection: ProductCategoryProps[] = [
  {
    categoryName: "Sản phẩm mới",
    products: [
      {
        id: "D2487670",
        name: "Áo phông in hoa D2487670",
        price: 350000,
        thumbnail: product7.src,
      },
      {
        id: "D24367330",
        name: "Đầm kẻ cổ vest D24367330",
        price: 450000,
        thumbnail: product8.src,
      },
      {
        id: "D24440",
        name: "Đầm cổ vest tây bồng D24440",
        price: 390000,
        thumbnail: product9.src,
      },
      {
        id: "D247330",
        name: "Đầm họa tiết D247330",
        price: 350000,
        thumbnail: product10.src,
      },
      {
        id: "DD4113670",
        name: "Quần ống đứng DD4113670",
        price: 750000,
        thumbnail: product11.src,
      },
      {
        id: "D11E33670",
        name: "Sơ mi chấm bi D11E33670",
        price: 500000,
        thumbnail: product12.src,
      },
    ],
  },
  {
    categoryName: "Áo phông cao cấp",
    products: [
      {
        id: "D243670",
        name: "Đầm hoa nhí vai nhún D243670",
        price: 350000,
        thumbnail: product1.src,
      },
      {
        id: "D2436700",
        name: "Đầm kẻ cổ vest D2436700",
        price: 450000,
        thumbnail: product2.src,
      },
      {
        id: "D24980",
        name: "Đầm cổ vest tây bồng D24980",
        price: 390000,
        thumbnail: product3.src,
      },
      {
        id: "D24760",
        name: "Đầm họa tiết D24760",
        price: 350000,
        thumbnail: product4.src,
      },
      {
        id: "D113670",
        name: "Quần ống đứng D113670",
        price: 750000,
        thumbnail: product5.src,
      },
      {
        id: "D113670",
        name: "Sơ mi chấm bi D113670",
        price: 500000,
        thumbnail: product6.src,
      },
    ],
  },
];

export const anotherProducts: ProductCategoryProps = {
  categoryName: "Sản phẩm tương tự",
  products: [
    {
      id: "D243670",
      name: "Đầm hoa nhí vai nhún D243670",
      price: 350000,
      thumbnail: product1.src,
    },
    {
      id: "D2436700",
      name: "Đầm kẻ cổ vest D2436700",
      price: 450000,
      thumbnail: product2.src,
    },
    {
      id: "D24980",
      name: "Đầm cổ vest tây bồng D24980",
      price: 390000,
      thumbnail: product3.src,
    },
    {
      id: "D24760",
      name: "Đầm họa tiết D24760",
      price: 350000,
      thumbnail: product4.src,
    },
    {
      id: "D113670",
      name: "Quần ống đứng D113670",
      price: 750000,
      thumbnail: product5.src,
    },
    {
      id: "D113670",
      name: "Sơ mi chấm bi D113670",
      price: 500000,
      thumbnail: product6.src,
    },
  ],
};

export const news: NewsItemProps[] = [
  {
    id: "adbadk7y33utq573vqdv6",
    title: "minimal chic",
    image: news1.src,
  },
  {
    id: "adbadk7y33utq573vqsv6",
    title: "3 cách diện sơ mi đúng chuẩn",
    image: news2.src,
  },
  {
    id: "adbadk7y33utq573vffv6",
    title: "suit - xu hướng thời trang cho quý cô quyền lực",
    image: news3.src,
  },
  {
    id: "adbadk7y33utq333vffv6",
    title: "khám phá 4 họa tiết chiếm lĩnh mùa xuân - hè",
    image: news4.src,
  },
  {
    id: "adbadk7y3344q573vffv6",
    title: "rạng rỡ đón hè cùng váy hoa",
    image: news5.src,
  },
  {
    id: "adbadk2233utq573vffv6",
    title:
      "3 MẪU TRANG PHỤC CỔ VEST THANH LỊCH VÀ SANG TRỌNG CHO CÔ NÀNG CÔNG SỞ",
    image: news6.src,
  },
  {
    id: "adbadk7y3344q57fdffv6",
    title: "SUMMER FESTIVAL - ÁO PHÔNG CHỈ TỪ 299K",
    image: news7.src,
  },
  {
    id: "adbadk2233utsx73vffv6",
    title: "ẤN TƯỢNG CÙNG ĐẦM THẮT NƠ",
    image: news8.src,
  },
];

export const productDetail = {
  id: "122ydhsj6532ve73g",
  image: [detail1.src, detail2.src, detail3.src, detail4.src, detail5.src],
  code: "D24GHN56",
  branch: "NEM",
  name: "Đầm midi hoa D24GHN56",
  price: 1399000,
  size: [
    { id: "size_4", name: "Size 4", isHave: true },
    { id: "size_5", name: "Size 5", isHave: true },
  ],
  color: [{ id: "white", code: "#ebd8d8" }],
  material: "vải voan",
  style:
    "đầm thiết kế dáng chữ A, vai bồng, tone màu vàng kết hợp họa tiết hoa in",
};
