// "use client";

// import { ChevronDown } from "lucide-react";
// import { useTranslations } from "next-intl";
// import { filterShowProps, filterStateProps } from "../page";

// interface Phan2Props {
//   gridNumber: number;
//   setGridNumber: React.Dispatch<React.SetStateAction<number>>;
//   setFilterShow: React.Dispatch<React.SetStateAction<filterShowProps>>;
//   setFilterState: React.Dispatch<React.SetStateAction<filterStateProps>>;
//   filterState: filterStateProps;
//   filterShow: filterShowProps;
//   sort: Array<string>;
// }

// function Phan2({
//   sort,
//   filterState,
//   gridNumber,
//   setGridNumber,
//   filterShow,
//   setFilterShow,
//   setFilterState,
// }: Phan2Props) {
//   const t = useTranslations("Phan2");

//   return (
//     <div className="py-8 flex justify-between items-center text-[12px]">
//       {/* LEFT */}
//       <div className="flex items-center gap-6">
//         <span>{t("viewAs")}</span>

//         <div className="flex items-center gap-2">
//           <div
//             className={`${
//               gridNumber === 2 ? "*:bg-zinc-800" : "*:bg-zinc-400"
//             } p-1 border flex cursor-pointer gap-[2px]`}
//             onClick={() => setGridNumber(2)}
//           >
//             <div className="w-1 h-4"></div>
//             <div className="w-1 h-4"></div>
//           </div>

//           <div
//             className={`${
//               gridNumber === 3 ? "*:bg-zinc-800" : "*:bg-zinc-400"
//             } p-1 border flex cursor-pointer gap-[2px]`}
//             onClick={() => setGridNumber(3)}
//           >
//             <div className="w-1 h-4"></div>
//             <div className="w-1 h-4"></div>
//             <div className="w-1 h-4"></div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-4">
//         {/* ITEMS PER PAGE */}
//         <div>{t("itemsPerPage")}</div>

//         <div className="relative">
//           <div
//             onClick={() => setFilterShow({ ...filterShow, pageNumber: !filterShow.pageNumber })}
//             className="flex select-none items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer"
//           >
//             {filterState.pageNumber} <ChevronDown strokeWidth={1} size={18} />
//           </div>

//           <div
//             className={`${
//               filterShow.pageNumber ? "top-[105%] block" : "hidden top-0"
//             } absolute z-20 bg-white text-[12px] shadow-md left-0 w-full`}
//           >
//             {[10, 15, 20, 25, 30, 50].map((value) => {
//               const isActive = value === filterState.pageNumber;

//               return (
//                 <div
//                   onClick={() => {
//                     setFilterState({ ...filterState, pageNumber: value });
//                     setFilterShow({ ...filterShow, pageNumber: false });
//                   }}
//                   className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
//                   key={value}
//                 >
//                   {value}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* SORT */}
//         <div>{t("sortBy")}</div>

//         <div className="relative">
//           <div
//             onClick={() => setFilterShow({ ...filterShow, sort: !filterShow.sort })}
//             className="select-none flex items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer"
//           >
//             {filterState.sort} <ChevronDown strokeWidth={1} size={18} />
//           </div>

//           <div
//             className={`${
//               filterShow.sort ? "top-[105%] block" : "hidden top-0"
//             } absolute bg-white z-20 text-[12px] shadow-md left-0 w-full`}
//           >
//             {sort.map((value) => {
//               const isActive = value === filterState.sort;

//               return (
//                 <div
//                   onClick={() => {
//                     setFilterState({ ...filterState, sort: value });
//                     setFilterShow({ ...filterShow, sort: false });
//                   }}
//                   className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
//                   key={value}
//                 >
//                   {value}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Phan2;

"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { filterShowProps, filterStateProps } from "../page";

interface Phan2Props {
  gridNumber: number;
  setGridNumber: React.Dispatch<React.SetStateAction<number>>;
  setFilterShow: React.Dispatch<React.SetStateAction<filterShowProps>>;
  setFilterState: React.Dispatch<React.SetStateAction<filterStateProps>>;
  filterState: filterStateProps;
  filterShow: filterShowProps;
  sort: Array<string>;
}

function Phan2({
  sort,
  filterState,
  gridNumber,
  setGridNumber,
  filterShow,
  setFilterShow,
  setFilterState,
}: Phan2Props) {
  const t = useTranslations(); // 👈 dùng global giống Navbar

  return (
    <div className="py-8 flex justify-between items-center text-[12px]">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <span>{t("Phan2.viewAs")}</span>

        <div className="flex items-center gap-2">
          <div
            className={`${
              gridNumber === 2 ? "*:bg-zinc-800" : "*:bg-zinc-400"
            } p-1 border flex cursor-pointer gap-[2px]`}
            onClick={() => setGridNumber(2)}
          >
            <div className="w-1 h-4"></div>
            <div className="w-1 h-4"></div>
          </div>

          <div
            className={`${
              gridNumber === 3 ? "*:bg-zinc-800" : "*:bg-zinc-400"
            } p-1 border flex cursor-pointer gap-[2px]`}
            onClick={() => setGridNumber(3)}
          >
            <div className="w-1 h-4"></div>
            <div className="w-1 h-4"></div>
            <div className="w-1 h-4"></div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* ITEMS PER PAGE */}
        <div>{t("Phan2.itemsPerPage")}</div>

        <div className="relative">
          <div
            onClick={() => setFilterShow({ ...filterShow, pageNumber: !filterShow.pageNumber })}
            className="flex select-none items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer"
          >
            {filterState.pageNumber} <ChevronDown strokeWidth={1} size={18} />
          </div>

          <div
            className={`${
              filterShow.pageNumber ? "top-[105%] block" : "hidden top-0"
            } absolute z-20 bg-white text-[12px] shadow-md left-0 w-full`}
          >
            {[10, 15, 20, 25, 30, 50].map((value) => {
              const isActive = value === filterState.pageNumber;

              return (
                <div
                  onClick={() => {
                    setFilterState({ ...filterState, pageNumber: value });
                    setFilterShow({ ...filterShow, pageNumber: false });
                  }}
                  className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
                  key={value}
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>

        {/* SORT */}
        <div>{t("Phan2.sortBy")}</div>

        <div className="relative">
          <div
            onClick={() => setFilterShow({ ...filterShow, sort: !filterShow.sort })}
            className="select-none flex items-center border py-2 pl-4 gap-4 pr-4 cursor-pointer"
          >
            {t(`${filterState.sort}`)} <ChevronDown strokeWidth={1} size={18} />
          </div>

          <div
            className={`${
              filterShow.sort ? "top-[105%] block" : "hidden top-0"
            } absolute bg-white z-20 text-[12px] shadow-md left-0 w-full`}
          >
            {sort.map((value) => {
              const isActive = value === filterState.sort;
              return (
                <div
                  onClick={() => {
                    setFilterState({ ...filterState, sort: value });
                    setFilterShow({ ...filterShow, sort: false });
                  }}
                  className={`cursor-pointer p-2 hover:bg-zinc-50 ${isActive && "underline"}`}
                  key={value}
                >
                  {t(`${value}`)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phan2;
