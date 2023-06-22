import { FC } from "react";

interface BannerProps {
  imageUrl: string;
}

const Banner: FC<BannerProps> = ({ imageUrl }) => {
  return (
    <div
      className="w-full aspect-[9/3] bg-cover mt-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default Banner;
