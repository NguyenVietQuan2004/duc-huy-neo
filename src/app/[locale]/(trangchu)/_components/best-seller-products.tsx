// "use client";

// import { useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { useTranslations } from "next-intl";

// import ProductItem from "./product-item";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// import { categories, products as Json } from "./data-new";

// /* =======================
//    PRODUCTS GROUP
// ======================= */
// const products = [
//   [Json[8], Json[9], Json[22], Json[23]],
//   [Json[11], Json[20], Json[21]],
//   [Json[12], Json[17], Json[24]],
// ];

// /* =======================
//    CATEGORY GROUP (i18n ready)
// ======================= */
// const HeadingProduct = [categories[3], categories[5], categories[6]];

// function BestSellerProducts() {
//   const t = useTranslations("BestSellerProducts");

//   const [currentList, setCurrentList] = useState(0);

//   const [bestSellerRef, bestSellerRefInView] = useInView({
//     threshold: 0.1,
//   });

//   return (
//     <div className="pt-12 relative px-2 lg:px-0 max-w-[1216px] mx-auto">
//       {/* TITLE */}
//       <h2 className="text-3xl text-center mb-12">{t("title")}</h2>

//       {/* CATEGORY SELECTOR */}
//       <Carousel
//         opts={{
//           align: "center",
//           loop: true,
//         }}
//       >
//         <CarouselContent className="lg:justify-center relative max-w-[600px] mx-auto pb-10">
//           {HeadingProduct.map((item, index) => {
//             const isActive = index === currentList;

//             return (
//               <CarouselItem key={index} className="basis-1/2 text-center lg:basis-1/3">
//                 <button
//                   onClick={() => setCurrentList(index)}
//                   className={`relative font-medium text-sm lg:text-base ${
//                     isActive ? "text-zinc-800" : "text-[rgb(150,150,150)] hover:underline underline-offset-8"
//                   }`}
//                 >
//                   {t(item.labelKey)}

//                   {isActive && (
//                     <span className="absolute w-full duration-300 -bottom-[4px] left-1/2 -translate-x-1/2 h-[1px] bg-black" />
//                   )}
//                 </button>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//       </Carousel>

//       {/* PRODUCTS */}
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//       >
//         <CarouselContent
//           ref={bestSellerRef}
//           className={`lg:justify-center relative duration-700 ${
//             bestSellerRefInView ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"
//           }`}
//         >
//           {products[currentList].map((item, index) => {
//             return (
//               <CarouselItem key={index} className="relative basis-1/2 lg:basis-1/4 select-none">
//                 <ProductItem item={item} />
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// }

// export default BestSellerProducts;

"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

import ProductItem from "./product-item";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { categories, products as Json } from "./data-new";

/* =======================
   SAFE PRODUCT GROUPS
======================= */
const products = [
  [Json[8], Json[9], Json[22], Json[23]],
  [Json[11], Json[20], Json[21]],
  [Json[12], Json[17], Json[24]],
].map((group) => group.filter(Boolean)); // 👈 tránh undefined crash

/* =======================
   CATEGORY GROUP (SAFE + i18n READY)
======================= */
const categoryIndexes = [3, 5, 6];

function BestSellerProducts() {
  const t = useTranslations();

  const [currentList, setCurrentList] = useState(0);

  const [bestSellerRef, bestSellerRefInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="pt-12 relative px-2 lg:px-0 max-w-[1216px] mx-auto">
      {/* TITLE */}
      <h2 className="text-3xl text-center mb-12">{t("BestSellerProducts.title")}</h2>

      {/* CATEGORY SELECTOR */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="lg:justify-center relative max-w-[600px] mx-auto pb-10">
          {categoryIndexes.map((index, i) => {
            const category = categories[index];
            if (!category) return null;

            const isActive = i === currentList;

            return (
              <CarouselItem key={category.id} className="basis-1/2 text-center lg:basis-1/3">
                <button
                  onClick={() => setCurrentList(i)}
                  className={`relative font-medium text-sm lg:text-base ${
                    isActive ? "text-zinc-800" : "text-[rgb(150,150,150)] hover:underline underline-offset-8"
                  }`}
                >
                  {/* FIX i18n */}
                  {t(category.labelKey)}

                  {isActive && (
                    <span className="absolute w-full duration-300 -bottom-[4px] left-1/2 -translate-x-1/2 h-[1px] bg-black" />
                  )}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* PRODUCTS */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent
          ref={bestSellerRef}
          className={`lg:justify-center relative duration-700 ${
            bestSellerRefInView ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"
          }`}
        >
          {(products[currentList] || []).map((item, index) => {
            if (!item) return null;

            return (
              <CarouselItem key={item._id ?? index} className="relative basis-1/2 lg:basis-1/4 select-none">
                <ProductItem item={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default BestSellerProducts;
