// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import FilterMobile from "./filter-mobile";
// import { SearchIcon } from "../../../../public/icons";
// import Phan1 from "../category/[categoryName]/_components/phan1";
// import { filterShowProps } from "../category/[categoryName]/page";
// import { products as Json } from "../(trangchu)/_components/data-new";

// import ProductItem from "../(trangchu)/_components/product-item";

// function SearchClient() {
//   const searchParams = useSearchParams().get("q");
//   const products = Json.filter((item) => item.name.toLowerCase().includes(searchParams?.toLowerCase() || ""));
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
//   const handleRangeChange = (e: number[]) => {
//     setFilterState({ ...filterState, rangeValue: e[0] });
//   };
//   const [searchValue, setSearchValue] = useState<string>("");
//   const router = useRouter();
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSearchValue("");

//     router.push(`/search?q=${searchValue}`);
//   };

//   const [gridNumber, setGridNumber] = useState<number>(3);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth > 1024) {
//         setGridNumber(3);
//       } else {
//         setGridNumber(2);
//       }
//     }

//     // Lắng nghe sự kiện thay đổi kích thước
//     window.addEventListener("resize", handleResize);

//     // Gọi hàm ngay lần đầu để cập nhật giá trị chính xác
//     handleResize();

//     // Dọn dẹp listener khi component bị unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div className="max-w-[1240px] px-[2px] lg:px-5 mx-auto py-12 ">
//       <h2 className="px-1 lg:px-0 py-4 font-semibold text-[20px]">
//         TÌM THẤY {products.length} KẾT QUẢ CHO "{searchParams}"
//       </h2>
//       <div className="py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//         <div className="hidden lg:block">
//           <Phan1
//             filterShow={filterShow}
//             filterState={filterState}
//             handleRangeChange={handleRangeChange}
//             setFilterShow={setFilterShow}
//           />
//         </div>
//         <div className="col-span-3 xl:col-span-4 ">
//           {/* products */}
//           <form onSubmit={handleSubmit}>
//             <div className="flex items-center gap-2 lg:gap-4 px-6 lg:px-0 ">
//               <input
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//                 placeholder="Tìm kiếm"
//                 className=" w-[600px] py-[10px] px-[15px] border border-zinc-200 text-sm outline-none "
//               />
//               <button className="px-[20px] bg-black border hover:bg-white duration-300 group ">
//                 <SearchIcon
//                   width={20}
//                   className="h-[41.6px] -rotate-90
//                    *:fill-white *:stroke-white *:text-white
//                   group-hover:*:fill-black group-hover:*:stroke-black group-hover:*:text-black
//                    font-bold duration-300"
//                 />
//               </button>
//             </div>
//           </form>
//           <FilterMobile
//             filterShow={filterShow}
//             filterState={filterState}
//             handleRangeChange={handleRangeChange}
//             setFilterShow={setFilterShow}
//           />
//           <div className=" grid  gap-2 mt-10 " style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>
//             {products.map((item, index) => {
//               return <ProductItem item={item} key={index} />;
//             })}
//           </div>

//           {/* co 15 trang va bai viet */}

//           <div className="mt-20 px-2 lg:px-0">
//             <div className="relative h-1 w-full bg-black hidden lg:block ">
//               <h2 className="font-semibold absolute  px-20 py-4 bg-white w-[500px] text-center left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2">
//                 Các trang và bài viết
//               </h2>
//             </div>
//             <div className="block lg:hidden font-semibold">Các trang và bài viết</div>
//             <div className="grid grid-cols-1 lg:grid-cols-2  mt-10 gap-4">
//               {[1, 2, 3, 4, 5, 6].map((item) => {
//                 return (
//                   <div
//                     key={item}
//                     className="px-[29px] lg:py-[29px] py-[20px] text-[12px] items-start flex flex-col gap-4 bg-[#fafafa] border border-[#e5e5e5]"
//                   >
//                     {/* TITLE */}
//                     <div className="hover:underline underline-offset-4 font-semibold text-[14px]">
//                       Use Website in Screen-Reader Mode
//                     </div>

//                     {/* DESCRIPTION */}
//                     <div className="text-gray-700 leading-relaxed">
//                       Accessibility Screen-Reader Guide, Feedback, and Issue Reporting | New window
//                       <br />
//                       Skip to Content ↵ ENTER
//                       <br />
//                       Neoperl ensures that users can access information about drinking water technology, sustainability,
//                       and product innovation through accessible interfaces and assistive technologies.
//                     </div>

//                     {/* CORE CONTENT */}
//                     <div className="text-gray-600">...</div>

//                     {/* CTA */}
//                     <div className="cursor-pointer py-2 px-4 font-medium bg-black text-white hover:bg-white border hover:border-black hover:text-black transition-all">
//                       Explore Accessibility Guide
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchClient;

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import FilterMobile from "./filter-mobile";
import { SearchIcon } from "../../../../public/icons";
import Phan1 from "../category/[categoryName]/_components/phan1";
import { filterShowProps } from "../category/[categoryName]/page";
import { products as Json } from "../(trangchu)/_components/data-new";

import ProductItem from "../(trangchu)/_components/product-item";

function SearchClient() {
  const t = useTranslations("SearchClient");

  const searchParams = useSearchParams().get("q");
  const products = Json.filter((item) => item.name.toLowerCase().includes(searchParams?.toLowerCase() || ""));

  const [filterShow, setFilterShow] = useState<filterShowProps>({
    price: true,
    stateReady: true,
    pageNumber: false,
    sort: false,
  });

  const [filterState, setFilterState] = useState({
    rangeValue: 0,
    pageNumber: 30,
    sort: t("bestSeller"),
  });

  const handleRangeChange = (e: number[]) => {
    setFilterState({ ...filterState, rangeValue: e[0] });
  };

  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue("");
    router.push(`/search?q=${searchValue}`);
  };

  const [gridNumber, setGridNumber] = useState<number>(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setGridNumber(3);
      } else {
        setGridNumber(2);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1240px] px-[2px] lg:px-5 mx-auto py-12 ">
      <h2 className="px-1 lg:px-0 py-4 font-semibold text-[20px]">
        {t("searchResult", {
          count: products.length,
          query: searchParams || "",
        })}
      </h2>

      <div className="py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <div className="hidden lg:block">
          <Phan1
            filterShow={filterShow}
            filterState={filterState}
            handleRangeChange={handleRangeChange}
            setFilterShow={setFilterShow}
          />
        </div>

        <div className="col-span-3 xl:col-span-4 ">
          {/* SEARCH INPUT */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 lg:gap-4 px-6 lg:px-0 ">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className=" w-[600px] py-[10px] px-[15px] border border-zinc-200 text-sm outline-none "
              />

              <button className="px-[20px] bg-black border hover:bg-white duration-300 group ">
                <SearchIcon
                  width={20}
                  className="h-[41.6px] -rotate-90 
                   *:fill-white *:stroke-white *:text-white
                  group-hover:*:fill-black group-hover:*:stroke-black group-hover:*:text-black
                   font-bold duration-300"
                />
              </button>
            </div>
          </form>

          <FilterMobile
            filterShow={filterShow}
            filterState={filterState}
            handleRangeChange={handleRangeChange}
            setFilterShow={setFilterShow}
          />

          {/* PRODUCTS */}
          <div className=" grid  gap-2 mt-10 " style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}>
            {products.map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })}
          </div>

          {/* PAGES & POSTS */}
          <div className="mt-20 px-2 lg:px-0">
            <div className="relative h-1 w-full bg-black hidden lg:block ">
              <h2 className="font-semibold absolute px-20 py-4 bg-white w-[500px] text-center left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2">
                {t("pagesAndPosts")}
              </h2>
            </div>

            <div className="block lg:hidden font-semibold">{t("pagesAndPosts")}</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div
                    key={item}
                    className="px-[29px] lg:py-[29px] py-[20px] text-[12px] items-start flex flex-col gap-4 bg-[#fafafa] border border-[#e5e5e5]"
                  >
                    <div className="hover:underline underline-offset-4 font-semibold text-[14px]">
                      {t("screenReaderTitle")}
                    </div>

                    <div className="text-gray-700 leading-relaxed">{t("screenReaderDescription")}</div>

                    <div className="text-gray-600">{t("coreContent")}</div>

                    <div className="cursor-pointer py-2 px-4 font-medium bg-black text-white hover:bg-white border hover:border-black hover:text-black transition-all">
                      {t("exploreGuide")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchClient;
