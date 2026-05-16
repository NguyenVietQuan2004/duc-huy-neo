"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";

import DrawerItem1 from "./drawer-item1";

function DrawerItem({ item, index }: { item: any; index: number }) {
  const router = useRouter();
  const [isShowCollapse1, setisShowCollapse1] = useState(false);

  return (
    <div className="relative border-b py-3 pl-5 pr-3 ">
      <div className="flex items-center justify-between" onClick={() => setisShowCollapse1(!isShowCollapse1)}>
        <span> {item.key}</span>
        {item.value.length > 0 ? (
          isShowCollapse1 ? (
            <ChevronDown className="stroke-[1.5]" />
          ) : (
            <ChevronRight className="stroke-[1.5]" />
          )
        ) : (
          ""
        )}
      </div>
      <div>
        {item.value.map((value: any, index1: any) => {
          return (
            <DrawerItem1 index={index} index1={index1} isShowCollapse1={isShowCollapse1} value={value} key={index1} />
          );
        })}
      </div>
    </div>
  );
}

export default DrawerItem;
