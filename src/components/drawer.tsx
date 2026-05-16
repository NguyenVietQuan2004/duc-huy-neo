"use client";

import { useEffect, useRef } from "react";

import DrawerItem from "./drawer-item";
import { CloseIcon } from "../../public/icons";
import { header } from "@/app/(trangchu)/_components/data-new";
import Link from "next/link";

interface DrawerProps {
  isShowNavbarMobile: boolean;
  setIsShowNavbarMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

function Drawer({ isShowNavbarMobile, setIsShowNavbarMobile }: DrawerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Chặn cuộn khi overlay mở
    if (isShowNavbarMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowNavbarMobile]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsShowNavbarMobile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, setIsShowNavbarMobile]);

  return (
    <div
      ref={containerRef}
      className={`   ${
        isShowNavbarMobile ? "opacity-100 left-0 " : " -left-64 opacity-0"
      } absolute left-0  w-[90vw] text-sm overflow-auto pb-36 duration-500 top-0 bottom-0  bg-white `}
    >
      <div className=" px-[16px] pt-[6px] pb-[3px]  items-center flex justify-between">
        <div></div>
        <div className="pt-3 pb-3" onClick={() => setIsShowNavbarMobile(false)}>
          <CloseIcon />
        </div>
      </div>

      <div>
        {[...header.cluster1].map((item, index) => {
          return <DrawerItem key={index} index={index} item={item} />;
          // return <div>hi</div>;
        })}

        <div className="flex flex-col py-3 pl-5">
          {["About", "Contact"].map((item, index4) => {
            return (
              <Link key={index4} href={`/${item.toLowerCase()}`} className=" group pr-20 pl-0 pb-6 relative ">
                <span className="group-hover:opacity-40 relative duration-300">
                  {item}
                  <span className=" absolute w-0   group-hover:opacity-40  group-hover:w-full duration-300 -bottom-[2px] left-1/2 -translate-x-1/2   h-[1px] bg-black  "></span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
