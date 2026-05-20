"use client";

import { header } from "@/app/[locale]/(trangchu)/_components/data-new";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Navbar({ isWidthFull }: { isWidthFull: boolean }) {
  const t = useTranslations(); // 👈 QUAN TRỌNG: bỏ namespace cố định

  return (
    <div className="max-w-[1200px] mx-auto" style={{ width: isWidthFull ? "100%" : "auto" }}>
      {/* HOME */}
      <Link href={"/"}>{t("Navbar.home")}</Link>

      {/* MENU CLUSTER */}
      {header.cluster1.map((item, index) => {
        return (
          <span key={index} className="first:pl-0 group px-20 pb-6">
            <span className="group-hover:opacity-40 relative duration-300">
              {/* FIX KEY */}
              {t(item.key)}

              <span className="absolute w-0 group-hover:w-full duration-300 -bottom-[2px] left-1/2 -translate-x-1/2 h-[1px] bg-black"></span>
            </span>

            <div className="opacity-0 invisible group-hover:visible w-full py-10 left-0 -z-10 top-[80%] group-hover:top-[100%] shadow-[0_0px_4px_3px_rgba(0,0,0,0.1)] group-hover:z-50 bg-white duration-300 group-hover:opacity-100 text-[12px] max-w-[100vw] absolute">
              <div className="max-w-[1240px] px-5 mx-auto grid grid-cols-5 gap-2">
                {item.value.map((value, index1) => (
                  <div key={index1} className="px-4 first:-ml-4">
                    <span className="font-semibold">{t(value.key1)}</span>

                    <div className="mt-2">
                      {value.value1.map((value2, index2) => (
                        <Link key={index2} href={`/category/${value2._id}?group=${index1 == 1 && "group"}`}>
                          <div className="group py-[3px] hover:opacity-40 duration-300 relative">
                            {/* FIX: labelKey phải translate */}
                            {t(value2.labelKey)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {item.images.map((image, index3) => (
                  <div key={index3} className="px-2">
                    <Image alt="" width={500} height={500} className="w-full h-full object-cover" src={image} />
                  </div>
                ))}
              </div>
            </div>
          </span>
        );
      })}

      <Link href="/about" className="group pr-20 pl-0 pb-6 relative">
        {t("Navbar.about")}
      </Link>

      <Link href="/contact" className="group pr-20 pl-0 pb-6 relative">
        {t("Navbar.contact")}
      </Link>
    </div>
  );
}

export default Navbar;
