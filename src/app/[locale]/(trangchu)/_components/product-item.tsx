// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { formatCurrency } from "@/lib/utils";
// import { HeartIcon } from "../../../../../public/icons";

// function ProductItem({ item, width }: { item: any; width?: string }) {
//   const handleOnclickAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   // 🔥 ảnh mặc định fallback
//   const defaultImage = "/images/default.png";

//   const imageSrc = item.avatar && item.avatar.length > 0 ? item.avatar[0] : defaultImage;

//   return (
//     <Link
//       href={`/products/${item._id}`}
//       className="text-center group relative cursor-pointer w-full"
//       style={{ width: width }}
//     >
//       {/* IMAGE BOX */}
//       <div className="relative w-full aspect-square overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={"/images/default.png"}
//           fill
//           className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
//         />

//         {/* ADD TO CART */}
//         <button
//           onClick={handleOnclickAddToCart}
//           className="absolute hover:bg-black font-semibold hover:text-white opacity-0 group-hover:opacity-100 group-hover:bottom-0 bottom-[-10px] duration-300 z-20 left-1/2 -translate-x-1/2 bg-white w-full py-[10px] border-[1px] border-zinc-800"
//         >
//           Thêm vào giỏ hàng (9)
//         </button>
//       </div>

//       {/* INFO */}
//       <div className="pt-[15px] min-h-[70px] flex flex-col justify-between">
//         <div className="text-[12px] hover:underline line-clamp-2">{item.name}</div>

//         <div className="text-sm font-bold">{formatCurrency(item?.price || 0)}</div>
//       </div>

//       {/* HEART */}
//       <div className="absolute top-2 right-2">
//         <HeartIcon />
//       </div>
//     </Link>
//   );
// }

// export default ProductItem;

"use client";

import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { HeartIcon } from "../../../../../public/icons";
import { useTranslations } from "next-intl";

function ProductItem({ item, width }: { item: any; width?: string }) {
  const t = useTranslations("ProductItem");

  const handleOnclickAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // 🔥 ảnh mặc định fallback
  const defaultImage = "/images/default.png";

  const imageSrc = item.avatar && item.avatar.length > 0 ? item.avatar[0] : defaultImage;

  return (
    <Link
      href={`/products/${item._id}`}
      className="text-center group relative cursor-pointer w-full"
      style={{ width: width }}
    >
      {/* IMAGE BOX */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={"/images/default.png"}
          fill
          className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
        />

        {/* ADD TO CART */}
        <button
          onClick={handleOnclickAddToCart}
          className="absolute hover:bg-black font-semibold hover:text-white opacity-0 group-hover:opacity-100 group-hover:bottom-0 bottom-[-10px] duration-300 z-20 left-1/2 -translate-x-1/2 bg-white w-full py-[10px] border-[1px] border-zinc-800"
        >
          {t("addToCart")}
        </button>
      </div>

      {/* INFO */}
      <div className="pt-[15px] min-h-[70px] flex flex-col justify-between">
        <div className="text-[12px] hover:underline line-clamp-2">{item.name}</div>

        <div className="text-sm font-bold">{formatCurrency(item?.price || 0)}</div>
      </div>

      {/* HEART */}
      <div className="absolute top-2 right-2">
        <HeartIcon />
      </div>
    </Link>
  );
}

export default ProductItem;
