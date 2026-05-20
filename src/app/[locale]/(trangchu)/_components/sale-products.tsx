// "use client";
// import Image from "next/image";
// import ListProduct from "./list-product";
// import { useInView } from "react-intersection-observer";

// import { categories, products as Json } from "./data-new";

// const products = [Json[0], Json[1], Json[14], Json[16], Json[1]];
// function SaleProducts() {
//   const [saleProduct1, saleProduct1InView] = useInView({
//     threshold: 0.1,
//   });
//   const [saleProduct2, saleProduct2InView] = useInView({
//     threshold: 0.1,
//   });

//   return (
//     <div className={`   pt-14 max-w-[1240px]  px-0 lg:px-5 mx-auto`}>
//       <div
//         className={`relative  duration-1000    ${
//           saleProduct1InView ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"
//         } `}
//         ref={saleProduct1}
//       >
//         <Image
//           alt=""
//           src="https://images.ctfassets.net/m9mcybwguwgq/7AhNlcuOJ5wJpqIsB8TjJD/eead548c3e07fe35178ec48cbe232e91/Vorlage_Textmedia_Teaser_590x347px_PLIM.png?w=1920&q=95&fm=webp"
//           width={1000}
//           height={1000}
//           className="w-full h-[100vh] lg:h-auto  object-cover"
//         />
//       </div>

//       {/* Ưu đãi */}
//       <div ref={saleProduct2} className={`pt-20 duration-1000   ${saleProduct2InView ? " opacity-100" : " opacity-0"}`}>
//         <h2 className="text-3xl text-center mb-8">SẢN PHẨM ƯU ĐÃI (10)</h2>
//         <ListProduct products={products} />
//       </div>
//     </div>
//   );
// }

// export default SaleProducts;

"use client";
import Image from "next/image";
import ListProduct from "./list-product";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

import { categories, products as Json } from "./data-new";

const products = [Json[0], Json[1], Json[14], Json[16], Json[1]];

function SaleProducts() {
  const t = useTranslations("SaleProducts");

  const [saleProduct1, saleProduct1InView] = useInView({
    threshold: 0.1,
  });
  const [saleProduct2, saleProduct2InView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className={`pt-14 max-w-[1240px] px-0 lg:px-5 mx-auto`}>
      <div
        className={`relative duration-1000 ${saleProduct1InView ? "bottom-0 opacity-100" : "-bottom-40 opacity-0"}`}
        ref={saleProduct1}
      >
        <Image
          alt=""
          src="https://images.ctfassets.net/m9mcybwguwgq/7AhNlcuOJ5wJpqIsB8TjJD/eead548c3e07fe35178ec48cbe232e91/Vorlage_Textmedia_Teaser_590x347px_PLIM.png?w=1920&q=95&fm=webp"
          width={1000}
          height={1000}
          className="w-full h-[100vh] lg:h-auto object-cover"
        />
      </div>

      {/* Ưu đãi */}
      <div ref={saleProduct2} className={`pt-20 duration-1000 ${saleProduct2InView ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-3xl text-center mb-8">{t("title")} (10)</h2>

        <ListProduct products={products} />
      </div>
    </div>
  );
}

export default SaleProducts;
