// "use client";

// import { useEffect, useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";

// import Phan1 from "./_components/phan1";
// import Phan2 from "./_components/phan2";
// import { FilterIcon } from "../../../../../public/icons";
// import Slider from "@/app/[locale]/(trangchu)/_components/carousel";
// import ListProduct from "@/app/[locale]/(trangchu)/_components/list-product";
// import ProductItem from "@/app/[locale]/(trangchu)/_components/product-item";
// import { notFound, useParams, useSearchParams } from "next/navigation";
// import { categories, categoriesProduct, products as Json, sort } from "../../(trangchu)/_components/data-new";

// export interface filterShowProps {
//   price: boolean;
//   stateReady: boolean;
//   pageNumber: boolean;
//   sort: boolean;
// }

// export interface filterStateProps {
//   rangeValue: number;
//   pageNumber: number;
//   sort: string;
// }

// function Category() {
//   const { categoryName } = useParams();
//   const searchParams = useSearchParams();
//   const [filterShow, setFilterShow] = useState<filterShowProps>({
//     price: true,
//     stateReady: true,
//     pageNumber: false,
//     sort: false,
//   });
//   const [filterState, setFilterState] = useState({
//     rangeValue: 0,
//     pageNumber: 30,
//     sort: "Bán chạy nhất",
//   });
//   const [gridNumber, setGridNumber] = useState<number>(3);
//   const handleRangeChange = (e: number[]) => {
//     setFilterState({ ...filterState, rangeValue: e[0] });
//   };
//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth > 1024) {
//         setGridNumber(3);
//       } else {
//         setGridNumber(2);
//       }
//     }

//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const group = searchParams.get("group");
//   if (!group) return notFound();
//   const products =
//     group === "group"
//       ? Json.filter((item1) => item1.id_group_category == categoryName)
//       : Json.filter((item1) => item1.id_category == categoryName);

//   if (products.length === 0) {
//     return (
//       <div className="max-w-[1240px] px-5 mx-auto py-12">
//         <div className="flex items-center gap-2 text-[12px]">
//           Nhà <ChevronRight size={14} /> <span className="text-[#999999]">RESILIENCE/VITALITY</span> (23)
//         </div>
//         <div className="py-10 grid grid-cols-5 gap-6">
//           {/* Phaàn 2 */}
//           <div></div>
//           <div className="col-span-4 border-t">
//             <div className="py-8 flex justify-between items-center text-[12px]">
//               <div className="flex items-center gap-6">
//                 <span>XEM NHƯ (24)</span>
//                 <div className="flex items-center gap-2">
//                   <div className="p-1 border flex cursor-pointer gap-[2px] flex-col" onClick={() => setGridNumber(1)}>
//                     <div className={` w -5 h-1`}></div>
//                     <div className={`${true ? "bg-zinc-800" : "bg-zinc-400"} w-5 h-1`}></div>
//                     <div className={`${true ? "bg-zinc-800" : "bg-zinc-400"} w-5 h-1`}></div>
//                   </div>
//                   <div className="p-1 border flex cursor-pointer gap-[2px] " onClick={() => setGridNumber(2)}>
//                     <div className={`${false ? "bg-zinc-800" : "bg-zinc-400"}  w-1 h-4`}></div>
//                     <div className={`${false ? "bg-zinc-800" : "bg-zinc-400"}  w-1 h-4`}></div>
//                   </div>
//                   <div className="p-1 border flex cursor-pointer gap-[2px] " onClick={() => setGridNumber(3)}>
//                     <div className={`${false ? "bg-zinc-800" : "bg-zinc-400"}  w-1 h-4`}></div>
//                     <div className={`${false ? "bg-zinc-800" : "bg-zinc-400"}  w-1 h-4`}></div>
//                     <div className={`${false ? "bg-zinc-800" : "bg-zinc-400"}  w-1 h-4`}></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div>CÁC MỤC TRÊN MỖI TRANG (25)</div>
//                 <div className="  relative ">
//                   <div
//                     onClick={() => setFilterShow({ ...filterShow, pageNumber: !filterShow.pageNumber })}
//                     className="flex select-none items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer "
//                   >
//                     {filterState.pageNumber} <ChevronDown strokeWidth={1} size={18} />
//                   </div>
//                   <div
//                     className={` ${
//                       filterShow.pageNumber ? "top-[105%] block" : " hidden top-0"
//                     } absolute z-20 bg-white text-[12px] shadow-md left-0 w-full `}
//                   >
//                     {[10, 15, 20, 25, 30, 50].map((value) => {
//                       const isActive = value === filterState.pageNumber;
//                       return (
//                         <div
//                           onClick={() => {
//                             setFilterState({ ...filterState, pageNumber: value });
//                             setFilterShow({ ...filterShow, pageNumber: false });
//                           }}
//                           className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
//                           key={value}
//                         >
//                           {value}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <div>SẮP XẾP THEO (26)</div>
//                 <div className="  relative ">
//                   <div
//                     onClick={() => setFilterShow({ ...filterShow, sort: !filterShow.sort })}
//                     className=" select-none flex  items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer "
//                   >
//                     {filterState.sort} <ChevronDown strokeWidth={1} size={18} />
//                   </div>
//                   <div
//                     className={` ${
//                       filterShow.sort ? "top-[105%] block" : " hidden top-0"
//                     } absolute bg-white z-20  text-[12px] shadow-md left-0 w-full `}
//                   >
//                     {sort.map((value: any) => {
//                       const isActive = value === filterState.sort;
//                       return (
//                         <div
//                           onClick={() => {
//                             setFilterState({ ...filterState, sort: value });
//                             setFilterShow({ ...filterShow, sort: false });
//                           }}
//                           className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
//                           key={value}
//                         >
//                           {value}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* products */}
//             <div className="text-center">
//               <div className="text-sm italic text-zinc-500">0 sản phẩm (27)</div>
//               <b>
//                 BỘ SƯU TẬP TRỐNG SỬ DỤNG ÍT BỘ LỌC HƠN <br /> <span className="underline">HOẶC QUÉT SẠCH TẤT CẢ</span>{" "}
//                 (28)
//               </b>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="max-w-[1240px] px-0 lg:px-5 mx-auto py-0 lg:py-12">
//       <div className="hidden lg:block">
//         <Slider />
//       </div>
//       <div className="flex mt-3 items-center gap-2 pl-2 lg:pl-0 text-[12px] py-3 lg:py-0 bg-zinc-100 lg:bg-transparent">
//         Nhà <ChevronRight size={14} /> <span className="text-[#999999]">RESILIENCE/VITALITY</span> (29)
//       </div>
//       <div className="py-10  grid  grid-cols-4 xl:grid-cols-5 gap-8">
//         <div className="hidden lg:grid">
//           <Phan1
//             filterShow={filterShow}
//             filterState={filterState}
//             setFilterShow={setFilterShow}
//             handleRangeChange={handleRangeChange}
//           />
//         </div>

//         {/* Phaàn 2 */}
//         <div className=" col-span-4  lg:border-t">
//           <div className="hidden lg:grid">
//             <Phan2
//               filterShow={filterShow}
//               filterState={filterState}
//               gridNumber={gridNumber}
//               setFilterShow={setFilterShow}
//               setGridNumber={setGridNumber}
//               setFilterState={setFilterState}
//               sort={sort}
//             />
//           </div>
//           {/* products */}
//           <div className="flex lg:hidden text-sm pb-10 pt-2 justify-between items-center px-2">
//             <div className="flex items-center gap-1 ">
//               <FilterIcon width={20} /> Lọc (30)
//             </div>
//             <div
//               className={`${
//                 gridNumber === 2 ? "*:bg-zinc-800" : "*:bg-zinc-400"
//               } p-1 border flex cursor-pointer gap-[2px] `}
//             >
//               <div className={`  w-1 h-4`}></div>
//               <div className={`  w-1 h-4`}></div>
//             </div>
//             <div className="flex items-center gap-2">
//               Sắp xếp (31) <ChevronDown size={14} />
//             </div>
//           </div>
//           <div className=" grid px-[2px] lg:px-0 gap-2 " style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>
//             {products.map((item, index) => {
//               return <ProductItem item={item} key={index} />;
//             })}
//           </div>
//         </div>
//       </div>

//       <div className="mb-10">
//         <h2 className="text-[20px] text-center lg:text-start lg:text-2xl my-4 font-bold">Sản phẩm nổi bậc (32)</h2>
//         <ListProduct products={products} />
//       </div>
//     </div>
//   );
// }

// export default Category;

"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams, useSearchParams, notFound } from "next/navigation";

import Phan1 from "./_components/phan1";
import Phan2 from "./_components/phan2";
import { FilterIcon } from "../../../../../public/icons";
import Slider from "@/app/[locale]/(trangchu)/_components/carousel";
import ListProduct from "@/app/[locale]/(trangchu)/_components/list-product";
import ProductItem from "@/app/[locale]/(trangchu)/_components/product-item";
import { categories, categoriesProduct, products as Json, sort } from "../../(trangchu)/_components/data-new";

export interface filterShowProps {
  price: boolean;
  stateReady: boolean;
  pageNumber: boolean;
  sort: boolean;
}

export interface filterStateProps {
  rangeValue: number;
  pageNumber: number;
  sort: string;
}

function Category() {
  const t = useTranslations("Category");

  const { categoryName } = useParams();
  const searchParams = useSearchParams();

  const [filterShow, setFilterShow] = useState<filterShowProps>({
    price: true,
    stateReady: true,
    pageNumber: false,
    sort: false,
  });

  const [filterState, setFilterState] = useState<filterStateProps>({
    rangeValue: 0,
    pageNumber: 30,
    sort: t("defaultSort"),
  });

  const [gridNumber, setGridNumber] = useState<number>(3);

  const handleRangeChange = (e: number[]) => {
    setFilterState({ ...filterState, rangeValue: e[0] });
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) setGridNumber(3);
      else setGridNumber(2);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const group = searchParams.get("group");
  // if (!group) return notFound();

  const products =
    group === "group"
      ? Json.filter((item1) => item1.id_group_category == categoryName)
      : Json.filter((item1) => item1.id_category == categoryName);

  /* ================= EMPTY ================= */
  if (products.length === 0) {
    return (
      <div className="max-w-[1240px] px-5 mx-auto py-12">
        <div className="flex items-center gap-2 text-[12px]">
          {t("home")} <ChevronRight size={14} /> <span className="text-[#999999]">{t("breadcrumb.category")}</span>
        </div>

        <div className="py-10 grid grid-cols-5 gap-6">
          <div></div>

          <div className="col-span-4 border-t">
            <div className="py-8 flex justify-between items-center text-[12px]">
              <div className="flex items-center gap-6">
                <span>{t("viewAs")}</span>

                <div className="flex items-center gap-2">
                  <div className="p-1 border flex cursor-pointer gap-[2px] flex-col" onClick={() => setGridNumber(1)}>
                    <div className="w-5 h-1 bg-zinc-400"></div>
                    <div className="w-5 h-1 bg-zinc-800"></div>
                    <div className="w-5 h-1 bg-zinc-800"></div>
                  </div>

                  <div className="p-1 border flex cursor-pointer gap-[2px]" onClick={() => setGridNumber(2)}>
                    <div className="w-1 h-4 bg-zinc-400"></div>
                    <div className="w-1 h-4 bg-zinc-400"></div>
                  </div>

                  <div className="p-1 border flex cursor-pointer gap-[2px]" onClick={() => setGridNumber(3)}>
                    <div className="w-1 h-4 bg-zinc-400"></div>
                    <div className="w-1 h-4 bg-zinc-400"></div>
                    <div className="w-1 h-4 bg-zinc-400"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>{t("itemsPerPage")}</div>

                <div>{t("sortBy")}</div>
              </div>
            </div>

            {/* EMPTY STATE */}
            <div className="text-center">
              <div className="text-sm italic text-zinc-500">{t("empty.productCount")}</div>

              <b>
                {t("empty.title1")} <br />
                <span className="underline">{t("empty.title2")}</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= MAIN ================= */
  return (
    <div className="max-w-[1240px] px-0 lg:px-5 mx-auto py-0 lg:py-12">
      <div className="hidden lg:block">
        <Slider />
      </div>

      <div className="flex mt-3 items-center gap-2 pl-2 lg:pl-0 text-[12px] py-3 lg:py-0 bg-zinc-100 lg:bg-transparent">
        {t("home")} <ChevronRight size={14} /> <span className="text-[#999999]">{t("breadcrumb.category")}</span>
      </div>

      <div className="py-10 grid grid-cols-4 xl:grid-cols-5 gap-8">
        <div className="hidden lg:grid">
          <Phan1
            filterShow={filterShow}
            filterState={filterState}
            setFilterShow={setFilterShow}
            handleRangeChange={handleRangeChange}
          />
        </div>

        <div className="col-span-4 lg:border-t">
          <div className="hidden lg:grid">
            <Phan2
              filterShow={filterShow}
              filterState={filterState}
              gridNumber={gridNumber}
              setFilterShow={setFilterShow}
              setGridNumber={setGridNumber}
              setFilterState={setFilterState}
              sort={sort}
            />
          </div>

          {/* MOBILE TOOLBAR */}
          <div className="flex lg:hidden text-sm pb-10 pt-2 justify-between items-center px-2">
            <div className="flex items-center gap-1">
              <FilterIcon width={20} /> {t("filter")}
            </div>

            <div className="flex items-center gap-2">
              {t("sort")} <ChevronDown size={14} />
            </div>
          </div>

          <div className="grid px-[2px] lg:px-0 gap-2" style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>
            {products.map((item, index) => (
              <ProductItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-[20px] text-center lg:text-start lg:text-2xl my-4 font-bold">{t("featuredProducts")}</h2>

        <ListProduct products={products} />
      </div>
    </div>
  );
}

export default Category;
