// "use client";
// import Image from "next/image";
// import ProductItem from "./product-item";
// import { useInView } from "react-intersection-observer";
// import { categories, products as Json } from "./data-new";

// const products = [Json[22], Json[23]];

// function DongNhanSamCoDac() {
//   const [nhansamRef, nhansamRefInView] = useInView({
//     threshold: 0.1,
//   });

//   return (
//     <div
//       ref={nhansamRef}
//       className={` ${
//         nhansamRefInView ? "left-0 opacity-100" : "left-72 opacity-0"
//       } pt-14 max-w-[1240px] relative duration-1000    px-5 mx-auto`}
//     >
//       <h2 className="text-3xl text-center mb-8">DÒNG TIẾT KIỆM NƯỚC (7)</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
//         <div className=" overflow-hidden relative">
//           <Image
//             alt=""
//             src="https://images.ctfassets.net/m9mcybwguwgq/6G0Er3rd3D5sK0v96P75ya/b3bb094245de892cb24217aba4b5de5f/Neoperl_water-saving.jpg?w=1920&q=95&fm=webp"
//             width={1000}
//             height={1000}
//             className="w-full hover:scale-110 duration-500 object-cover"
//           />
//           <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
//             <h2 className=" text-xl md:text-[32px] font-bold">
//               Water and <span className="whitespace-nowrap">energy-saving</span> products (8)
//             </h2>
//           </div>
//         </div>
//         <div className=" flex justify-center  gap-3 items-center">
//           {products.map((item, index) => {
//             return <ProductItem item={item} key={index} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DongNhanSamCoDac;

"use client";

import Image from "next/image";
import ProductItem from "./product-item";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

import { products as Json } from "./data-new";

const products = [Json[22], Json[23]];

function DongNhanSamCoDac() {
  const t = useTranslations("DongNhanSamCoDac");

  const [nhansamRef, nhansamRefInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={nhansamRef}
      className={`${
        nhansamRefInView ? "left-0 opacity-100" : "left-72 opacity-0"
      } pt-14 max-w-[1240px] relative duration-1000 px-5 mx-auto`}
    >
      <h2 className="text-3xl text-center mb-8">{t("title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div className="overflow-hidden relative">
          <Image
            alt=""
            src="https://images.ctfassets.net/m9mcybwguwgq/6G0Er3rd3D5sK0v96P75ya/b3bb094245de892cb24217aba4b5de5f/Neoperl_water-saving.jpg?w=1920&q=95&fm=webp"
            width={1000}
            height={1000}
            className="w-full hover:scale-110 duration-500 object-cover"
          />

          <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-xl md:text-[32px] font-bold">
              {t("productTitle1")} <span className="whitespace-nowrap">{t("productTitle2")}</span>
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-3 items-center">
          {products.map((item, index) => {
            return <ProductItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DongNhanSamCoDac;
