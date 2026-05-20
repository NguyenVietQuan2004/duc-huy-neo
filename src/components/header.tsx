"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "./navbar";
import Search from "./search";

function Header() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      // Kiểm tra nếu vị trí hiện tại nhỏ hơn vị trí trước đó, nghĩa là cuộn lên
      if (currentScrollY < prevScrollY.current && currentScrollY > 160) {
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
    <header>
      <div className=" py-4 pb-1 max-w-[1240px] px-5 mx-auto">
        <div className="flex justify-end ">
          <Search />
        </div>
        <div className="flex cursor-pointer justify-between mt-1">
          <Link href="/" className="block">
            <Image
              alt=""
              src="/images/logo.png"
              // src="https://vn.sulwhasoo.com/cdn/shop/files/sws-logo-img.png?v=1671424779&width=300"
              width={500}
              height={500}
              className="w-[100px] object-cover"
            />
          </Link>
          <div className="flex items-center gap-6 text-[12px] text-[#323232]">
            <Link href={""} className="text-lg font-medium hover:underline transition-all duration-500">
              Watersaving Calculator
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={titleRef}
        className={` pt-6 pb-4 px-5 text-sm flex  items-center duration-1000 relative ${
          titleInView ? "bottom-0" : "-bottom-10"
        }`}
      >
        <Navbar isWidthFull={true} />
      </div>
      {isScrolled && (
        <div className="text-sm font-semibold fixed animate-navbar flex justify-center top-0 left-0 right-0 py-4 bg-white z-[999]">
          <Navbar isWidthFull={false} />
        </div>
      )}
    </header>
  );
}

export default Header;
