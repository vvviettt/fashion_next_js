import { FC } from "react";
import { CategoryItemInterface } from "../Header.interface";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import DownArrow from "@/assets/svg/down-arrow.svg";

interface CategoryItemProps {
  category: CategoryItemInterface;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/${category.path}`)}>
      <div className="group-one">
        <div className="px-2.5 py-[15px] relative gap-1 flex text-[#07070780] group-one-hover:text-[#070707]">
          <span className="text-[14px] leading-[21px] uppercase font-medium ">
            {category.label}
          </span>
          {category.child && category.child.length > 0 && (
            <>
              <DownArrow width={9} />
              <div
                className={classNames(
                  "absolute w-[200px]  hidden group-one-hover:block top-[100%] z-30 shadow-blur bg-white"
                )}
              >
                {category.child.map((item) => {
                  return (
                    <div
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        router.push(`/${category.path}/${item.path}`);
                      }}
                      key={item.id}
                      className="z-50 cursor-pointer"
                    >
                      <div className="flex gap-3 py-4 pl-5  hover:bg-black hover:bg-opacity-30 relative group-two">
                        <span className="text-[14px] font-light">
                          {item.label}
                        </span>
                        {item.child && item.child.length > 0 && (
                          <>
                            <div className="rotate-[-90deg]">
                              <DownArrow width={8} color={"#07070760"} />
                            </div>
                            <div className="absolute left-[100%] top-[50%] w-52  hidden group-two-hover:block ">
                              <div className="shadow-blur  ml-3 bg-white">
                                {item.child.map((e) => {
                                  return (
                                    <div
                                      key={e.id}
                                      className=" cursor-pointer"
                                      onMouseDown={(event) => {
                                        event.stopPropagation();
                                        router.push(
                                          `/${category.path}/${item.path}/${e.path}`
                                        );
                                      }}
                                    >
                                      <div className="py-4 pl-5  hover:bg-black hover:bg-opacity-30 relative">
                                        <span className="text-[14px] font-light">
                                          {e.label}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
