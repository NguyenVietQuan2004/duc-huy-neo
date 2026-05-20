// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { formatCurrency } from "@/lib/utils";
// import { ChevronRight, Star } from "lucide-react";
// import { StarFilledIcon } from "@radix-ui/react-icons";
// import { useTranslations } from "next-intl";

// import SlideProduct from "./slide-product";
// import { HeartIcon, ShareIcon } from "../../../../../public/icons";
// import ListProduct from "@/app/[locale]/(trangchu)/_components/list-product";
// import { useParams } from "next/navigation";
// import { categoriesProduct, products as Json } from "../../(trangchu)/_components/data-new";

// function ProductDetail() {
//   const t = useTranslations("ProductDetail");

//   const { productName } = useParams();

//   /* =========================
//      FIX: safer product lookup
//   ========================= */
//   const product = Json.find((item) => String(item._id) === String(productName));

//   if (!product) return null;

//   const list = Json.filter((item) => item.id_group_category == product.id_group_category);

//   const productsRef = list;

//   const [currentQuantity, setCurrentQuantity] = useState(1);
//   const [currentImage, setCurrentImage] = useState(product.avatar?.[0] || "/images/default.png");

//   const [isDesciption, setIsDescription] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY >= 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handlePlusQuantity = () => setCurrentQuantity((prev) => prev + 1);

//   const handleMinusQuantity = () => setCurrentQuantity((prev) => Math.max(0, prev - 1));

//   /* =========================
//      CATEGORY LABEL FIX
//   ========================= */
//   const category = categoriesProduct.find((item) => item.id == Number(product.id_category));

//   return (
//     <div className="max-w-[1240px] px-2 lg:px-5 mx-auto py-12 pb-32 mt-4 lg:mt-0 ">
//       {/* BREADCRUMB */}
//       <div className="flex items-center gap-2 text-[12px] text-[#999999] ">
//         {t("home")} <ChevronRight size={14} />
//         {t("products")} <ChevronRight size={14} />
//         <span className="line-clamp-1 whitespace-nowrap">{product.name}</span>
//       </div>

//       {/* MAIN */}
//       <div className="grid grid-cols-1 lg:grid-cols-7 gap-7 xl:gap-16 mt-10">
//         {/* IMAGE */}
//         <div className="flex flex-col-reverse xl:flex-row gap-6 col-span-4 justify-end ">
//           <SlideProduct images={product.avatar} setCurrentImage={setCurrentImage} />

//           <div className="flex-1">
//             <Image
//               key={currentImage}
//               alt=""
//               src={currentImage}
//               width={1000}
//               height={1000}
//               className="w-full object-cover animate-opacity"
//             />
//           </div>
//         </div>

//         {/* INFO */}
//         <div className="col-span-3 flex flex-col text-[12px] gap-3">
//           <h2 className="text-[24px] font-semibold ">{product.name}</h2>

//           {/* STAR */}
//           <div className="text-[#eb1c23] flex gap-[2px]">
//             {[...Array(5)].map((_, i) => (
//               <StarFilledIcon key={i} width={18} height={18} />
//             ))}
//           </div>

//           {/* CATEGORY (FIXED I18N) */}
//           <span>{category ? t(category.labelKey) : ""}</span>

//           <div className="text-[22px] font-semibold">{formatCurrency(product.price || 0)}</div>

//           {/* PAY LATER */}
//           <div className="text-[17px] flex items-center gap-2">
//             <span>{t("payLater")}</span>
//             <img alt="" src="https://assets.fundiin.vn/merchant/logo_transparent.png" />
//           </div>

//           {/* DISCOUNT */}
//           <div className="text-white self-start p-1 pl-4 pr-20 rounded-sm bg-gradient-to-r from-[#06DECD] to-[#744DEF] text-[16px]">
//             {t("discountText1")} <span className="font-bold text-[#fffdc3]">100K</span> {t("discountText2")} <br />
//             Fundiin. <span className="font-bold underline cursor-pointer hover:opacity-85">{t("viewMore")}</span>
//           </div>

//           {/* TOTAL */}
//           <div>
//             {t("subtotal")}: {formatCurrency(2000000 * currentQuantity)}
//           </div>

//           {/* QUANTITY */}
//           <div>{t("quantity")}:</div>

//           <div className="flex gap-4 flex-col lg:flex-row lg:items-center ">
//             <div className="py-2 border flex w-[120px] items-center justify-between">
//               <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
//                 -
//               </div>
//               <span>{currentQuantity}</span>
//               <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
//                 +
//               </div>
//             </div>

//             <div className="border p-3 lg:h-full flex-1 duration-300 border-black flex items-center justify-center text-[18px] font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
//               {t("addToCart")}
//             </div>

//             <ShareIcon className="hidden lg:block" />
//           </div>

//           <div className="flex items-center gap-2 mt-4 lg:mt-0">
//             <HeartIcon /> {t("addToWishlist")}
//           </div>
//         </div>
//       </div>

//       {/* RELATED */}
//       <div className="mb-10">
//         <h2 className="text-[20px] text-center lg:text-start lg:text-2xl my-4 font-bold">{t("relatedProducts")}</h2>

//         <ListProduct products={productsRef} />
//       </div>

//       {/* DESCRIPTION / REVIEW */}
//       <div className="mt-20">
//         <div className="border-b flex items-center justify-center gap-10">
//           <div
//             className={`py-4 font-bold text-[20px] ${
//               isDesciption && "underline underline-offset-[24px]"
//             } decoration-[3px] cursor-pointer`}
//             onClick={() => setIsDescription(true)}
//           >
//             {t("description")}
//           </div>

//           <div
//             className={`py-4 font-bold text-[20px] ${
//               !isDesciption && "underline underline-offset-[24px]"
//             } decoration-[3px] cursor-pointer`}
//             onClick={() => setIsDescription(false)}
//           >
//             {t("review")}
//           </div>
//         </div>

//         {isDesciption ? (
//           <div
//             dangerouslySetInnerHTML={{
//               __html: product.content,
//             }}
//             className="mt-10 text-[12px]"
//           />
//         ) : (
//           <div className="mt-10">
//             <div className="flex items-center justify-between px-5 lg:px-10">
//               <div className="flex items-center gap-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} color="#eb1c23" />
//                 ))}
//               </div>

//               <div className="bg-white border hover:bg-zinc-200 py-1 px-3">{t("writeReview")}</div>
//             </div>

//             <div className="text-center mt-6">
//               {t("beFirstReview")} <span className="underline cursor-pointer">{t("writeAReview")}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* FIXED BAR */}
//       <div
//         className={`fixed py-4 w-[100vw] bg-white shadow-2xl ${
//           isScrolled ? "-bottom-[0]" : "-bottom-[80px]"
//         } left-0 duration-700 z-30`}
//       >
//         <div className="max-w-[1240px] px-5 mx-auto flex items-center justify-between">
//           <div className="items-center gap-8 hidden lg:flex">
//             <img alt="" src={currentImage} className="w-[45px] h-[45px] object-cover" />
//             <div>
//               <div className="text-[12px] max-w-[400px] line-clamp-1">{product.name}</div>
//               <div className="text-sm font-semibold">{formatCurrency(product.price || 0)}</div>
//             </div>
//           </div>

//           <div className="flex w-full lg:w-auto items-center gap-4 ">
//             <div className="hidden lg:flex border h-[41.6px] w-[120px] items-center justify-between">
//               <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
//                 -
//               </div>
//               <span className="text-[12px]">{currentQuantity}</span>
//               <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
//                 +
//               </div>
//             </div>

//             <div className="border w-full text-[12px] px-3 h-[41.6px] flex-1 duration-300 border-black flex items-center justify-center font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
//               {t("addToCart")}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { ChevronRight, Star } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

import SlideProduct from "./slide-product";
import { HeartIcon, ShareIcon } from "../../../../../public/icons";
import ListProduct from "@/app/[locale]/(trangchu)/_components/list-product";
import { useParams } from "next/navigation";
import { categoriesProduct, products as Json } from "../../(trangchu)/_components/data-new";

function ProductDetail() {
  const t = useTranslations();

  const { productName } = useParams();

  /* =========================
     FIX SAFE PRODUCT LOOKUP
  ========================= */
  const product = Json.find((item) => String(item._id) == String(productName)) || Json[0];

  const list = Json.filter((item) => item.id_group_category == product.id_group_category);

  const productsRef = list;

  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.avatar?.[0] || "/images/default.png");

  const [isDesciption, setIsDescription] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlusQuantity = () => setCurrentQuantity((prev) => prev + 1);

  const handleMinusQuantity = () => setCurrentQuantity((prev) => Math.max(0, prev - 1));

  /* =========================
     FIX CATEGORY SAFE + I18N
  ========================= */
  const category = categoriesProduct.find((item) => item.id == Number(product.id_category));
  if (!product) return null;

  return (
    <div className="max-w-[1240px] px-2 lg:px-5 mx-auto py-12 pb-32 mt-4 lg:mt-0 ">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-[12px] text-[#999999] ">
        {t("ProductDetail.home")} <ChevronRight size={14} />
        {t("ProductDetail.products")} <ChevronRight size={14} />
        <span className="line-clamp-1 whitespace-nowrap">{product.name}</span>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-7 xl:gap-16 mt-10">
        {/* IMAGE */}
        <div className="flex flex-col-reverse xl:flex-row gap-6 col-span-4 justify-end ">
          <SlideProduct images={product.avatar} setCurrentImage={setCurrentImage} />

          <div className="flex-1">
            <Image
              key={currentImage}
              alt=""
              src={currentImage}
              width={1000}
              height={1000}
              className="w-full object-cover animate-opacity"
            />
          </div>
        </div>

        {/* INFO */}
        <div className="col-span-3 flex flex-col text-[12px] gap-3">
          <h2 className="text-[24px] font-semibold ">{product.name}</h2>

          {/* STAR */}
          <div className="text-[#eb1c23] flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <StarFilledIcon key={i} width={18} height={18} />
            ))}
          </div>

          {/* CATEGORY FIX */}
          <span>{category ? t(category.labelKey) : ""}</span>

          <div className="text-[22px] font-semibold">{formatCurrency(product.price || 0)}</div>

          {/* PAY LATER */}
          <div className="text-[17px] flex items-center gap-2">
            <span>{t("ProductDetail.payLater")}</span>
            <img alt="" src="https://assets.fundiin.vn/merchant/logo_transparent.png" />
          </div>

          {/* DISCOUNT */}
          <div className="text-white self-start p-1 pl-4 pr-20 rounded-sm bg-gradient-to-r from-[#06DECD] to-[#744DEF] text-[16px]">
            {t("ProductDetail.discountText1")} <span className="font-bold text-[#fffdc3]">100K</span>{" "}
            {t("ProductDetail.discountText2")}
            <br />
            Fundiin.{" "}
            <span className="font-bold underline cursor-pointer hover:opacity-85">{t("ProductDetail.viewMore")}</span>
          </div>

          {/* TOTAL */}
          <div>
            {t("ProductDetail.subtotal")}: {formatCurrency(2000000 * currentQuantity)}
          </div>

          {/* QUANTITY */}
          <div>{t("ProductDetail.quantity")}:</div>

          <div className="flex gap-4 flex-col lg:flex-row lg:items-center ">
            <div className="py-2 border flex w-[120px] items-center justify-between">
              <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
                -
              </div>
              <span>{currentQuantity}</span>
              <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
                +
              </div>
            </div>

            <div className="border p-3 lg:h-full flex-1 duration-300 border-black flex items-center justify-center text-[18px] font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
              {t("ProductDetail.addToCart")}
            </div>

            <ShareIcon className="hidden lg:block" />
          </div>

          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <HeartIcon /> {t("ProductDetail.addToWishlist")}
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="mb-10">
        <h2 className="text-[20px] text-center lg:text-start lg:text-2xl my-4 font-bold">
          {t("ProductDetail.relatedProducts")}
        </h2>

        <ListProduct products={productsRef} />
      </div>

      {/* DESCRIPTION / REVIEW */}
      <div className="mt-20">
        <div className="border-b flex items-center justify-center gap-10">
          <div
            className={`py-4 font-bold text-[20px] ${
              isDesciption && "underline underline-offset-[24px]"
            } decoration-[3px] cursor-pointer`}
            onClick={() => setIsDescription(true)}
          >
            {t("ProductDetail.description")}
          </div>

          <div
            className={`py-4 font-bold text-[20px] ${
              !isDesciption && "underline underline-offset-[24px]"
            } decoration-[3px] cursor-pointer`}
            onClick={() => setIsDescription(false)}
          >
            {t("ProductDetail.review")}
          </div>
        </div>

        {isDesciption ? (
          <div
            dangerouslySetInnerHTML={{
              __html: product.content,
            }}
            className="mt-10 text-[12px]"
          />
        ) : (
          <div className="mt-10">
            <div className="flex items-center justify-between px-5 lg:px-10">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} color="#eb1c23" />
                ))}
              </div>

              <div className="bg-white border hover:bg-zinc-200 py-1 px-3">{t("ProductDetail.writeReview")}</div>
            </div>

            <div className="text-center mt-6">
              {t("ProductDetail.beFirstReview")}{" "}
              <span className="underline cursor-pointer">{t("ProductDetail.writeAReview")}</span>
            </div>
          </div>
        )}
      </div>

      {/* FIXED BAR */}
      <div
        className={`fixed py-4 w-[100vw] bg-white shadow-2xl ${
          isScrolled ? "-bottom-[0]" : "-bottom-[80px]"
        } left-0 duration-700 z-30`}
      >
        <div className="max-w-[1240px] px-5 mx-auto flex items-center justify-between">
          <div className="items-center gap-8 hidden lg:flex">
            <img alt="" src={currentImage} className="w-[45px] h-[45px] object-cover" />
            <div>
              <div className="text-[12px] max-w-[400px] line-clamp-1">{product.name}</div>
              <div className="text-sm font-semibold">{formatCurrency(product.price || 0)}</div>
            </div>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-4 ">
            <div className="hidden lg:flex border h-[41.6px] w-[120px] items-center justify-between">
              <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
                -
              </div>
              <span className="text-[12px]">{currentQuantity}</span>
              <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
                +
              </div>
            </div>

            <div className="border w-full text-[12px] px-3 h-[41.6px] flex-1 duration-300 border-black flex items-center justify-center font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
              {t("ProductDetail.addToCart")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
