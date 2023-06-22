/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";

export interface NewsItemProps {
  id: string;
  image: string;
  title: string;
}
const NewsItem: FC<NewsItemProps> = ({ id, image, title }) => {
  return (
    <div className="px-1.5">
      <Link href={`/news/${id}`}>
        <div className="a aspect-[5/3]">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <p className="text-[16px] font-semibold text-text text-center uppercase left-5 p-[15px]">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default NewsItem;
