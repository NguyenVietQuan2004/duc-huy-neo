"use client";

import { useState } from "react";

function FooterItem({ item }: { item: any }) {
  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <div>
      <span
        onClick={() => setIsShowDetail(!isShowDetail)}
        className="text-[15px]  cursor-pointer flex items-center justify-between border-b lg:border-none lg:block text-white lg:text-[#CFCFB4] font-semibold lg:font-medium "
      >
        {" "}
        {item.key}
        <span className="block lg:hidden text-[26px]">+</span>
      </span>
      <div className="my-3 block lg:hidden">
        {isShowDetail &&
          item.value.map((value: any, index1: number) => {
            return (
              <div
                className="text-[12px] py-1 text-[#CFCFCF] hover:underline decoration-white hover:text-white cursor-pointer underline-offset-2"
                key={index1}
              >
                {value}
              </div>
            );
          })}
      </div>
      {item.value.map((value: any, index1: number) => {
        return (
          <div
            className="text-[12px] hidden lg:block py-1 text-[#CFCFCF] hover:underline decoration-white hover:text-white cursor-pointer underline-offset-2"
            key={index1}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

export default FooterItem;
