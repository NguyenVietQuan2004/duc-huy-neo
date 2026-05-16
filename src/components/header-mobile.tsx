"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Drawer from "./drawer";
import SearchMobile from "./search-mobile";

function HeaderMobile() {
  const [isShowNavbarMobile, setIsShowNavbarMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      // Kiểm tra nếu vị trí hiện tại nhỏ hơn vị trí trước đó, nghĩa là cuộn lên
      if (currentScrollY < prevScrollY.current) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Cập nhật vị trí cuộn trước đó
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header>
        <div
          className={` py-4 max-w-[1240px] px-1 mx-auto ${
            isScrolled && "fixed top-0 animate-navbar left-0 right-0 bg-white z-10 shadow-md"
          } `}
        >
          <div className="flex justify-between ">
            <div className="flex items-center">
              <MenuIcon width={60} onClick={() => setIsShowNavbarMobile(true)} />
              <SearchMobile />
            </div>
            <Link href="/">
              <Image
                alt=""
                src="https://vn.sulwhasoo.com/cdn/shop/files/sws-logo-img.png?v=1671424779&width=300"
                width={500}
                height={500}
                className="w-[90px] object-cover"
              />
            </Link>
            <div></div>
          </div>
        </div>
      </header>
      <div
        className={` ${
          isShowNavbarMobile ? " visible" : " invisible "
        } fixed w-[100vw]  top-0 bottom-0  right-0  z-[999] bg-[rgba(0,0,0,0.3)]`}
      >
        <Drawer isShowNavbarMobile={isShowNavbarMobile} setIsShowNavbarMobile={setIsShowNavbarMobile} />
      </div>
    </div>
  );
}

export default HeaderMobile;
