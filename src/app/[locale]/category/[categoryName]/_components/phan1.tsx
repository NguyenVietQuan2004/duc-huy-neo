// import React from "react";
// import { ChevronUp } from "lucide-react";
// import { formatCurrency } from "@/lib/utils";
// import { Slider } from "@/components/ui/slider";
// import { filterShowProps, filterStateProps } from "../page";

// interface Phan1Props {
//   filterShow: filterShowProps;
//   setFilterShow: React.Dispatch<React.SetStateAction<filterShowProps>>;
//   filterState: filterStateProps;
//   handleRangeChange: (e: number[]) => void;
// }

// function Phan1({ filterShow, setFilterShow, filterState, handleRangeChange }: Phan1Props) {
//   return (
//     <div>
//       <b
//         className=" flex items-center cursor-pointer justify-between text-sm border-b pb-4 border-zinc-800"
//         onClick={() => setFilterShow({ ...filterShow, stateReady: !filterShow.stateReady })}
//       >
//         TRẠNG THÁI SẴN SÀNG (14)
//         <ChevronUp
//           strokeWidth={1}
//           className={` duration-300 transition-all ${!filterShow.stateReady && "rotate-180"}`}
//         />{" "}
//       </b>
//       <div
//         className={`${
//           !filterShow.stateReady ? "h-0" : "h-[70px]"
//         } my-5 text-[12px] overflow-hidden duration-300 transition-all`}
//       >
//         <div className="flex items-center gap-3 cursor-pointer">
//           <input type="checkbox" />
//           <span>Còn hàng (4) (15)</span>
//         </div>
//         <div className="flex mt-2 items-center gap-3">
//           <input type="checkbox" disabled />
//           <span className="opacity-70">Hết hàng (0) (16)</span>
//         </div>
//       </div>

//       <b
//         className="flex items-center mb-8 cursor-pointer justify-between text-sm border-b pb-4 border-zinc-800"
//         onClick={() => setFilterShow({ ...filterShow, price: !filterShow.price })}
//       >
//         GIÁ (17)
//         <ChevronUp strokeWidth={1} className={` duration-300 transition-all ${!filterShow.price && "rotate-180"}`} />
//       </b>
//       <div
//         className={`flex flex-col duration-300   overflow-hidden items-center ${
//           !filterShow.price ? "h-0" : "h-[125px] pt-2"
//         } `}
//       >
//         <Slider
//           defaultValue={[0]}
//           max={3000000} // Giá trị tối đa
//           onValueChange={handleRangeChange} // Sự kiện thay đổi giá trị
//           className="w-full" // Kích thước của thanh trượt
//         />
//         <p className="mt-4 self-start">Giá trị hiện tại (18): {formatCurrency(filterState.rangeValue)}</p>
//         <button className="mx-auto mt-6 rounded-[2px] py-[10px] w-full bg-black text-white hover:bg-white duration-300 border  border-black hover:text-black font-semibold">
//           Bắt đầu (19)
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Phan1;

import React from "react";
import { ChevronUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { filterShowProps, filterStateProps } from "../page";
import { useTranslations } from "next-intl";

interface Phan1Props {
  filterShow: filterShowProps;
  setFilterShow: React.Dispatch<React.SetStateAction<filterShowProps>>;
  filterState: filterStateProps;
  handleRangeChange: (e: number[]) => void;
}

function Phan1({ filterShow, setFilterShow, filterState, handleRangeChange }: Phan1Props) {
  const t = useTranslations("Phan1");

  return (
    <div>
      <b
        className="flex items-center cursor-pointer justify-between text-sm border-b pb-4 border-zinc-800"
        onClick={() => setFilterShow({ ...filterShow, stateReady: !filterShow.stateReady })}
      >
        {t("stateReady")}
        <ChevronUp
          strokeWidth={1}
          className={`duration-300 transition-all ${!filterShow.stateReady && "rotate-180"}`}
        />
      </b>

      <div
        className={`${
          !filterShow.stateReady ? "h-0" : "h-[70px]"
        } my-5 text-[12px] overflow-hidden duration-300 transition-all`}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" />
          <span>{t("inStock")}</span>
        </div>

        <div className="flex mt-2 items-center gap-3">
          <input type="checkbox" disabled />
          <span className="opacity-70">{t("outStock")}</span>
        </div>
      </div>

      <b
        className="flex items-center mb-8 cursor-pointer justify-between text-sm border-b pb-4 border-zinc-800"
        onClick={() => setFilterShow({ ...filterShow, price: !filterShow.price })}
      >
        {t("price")}
        <ChevronUp strokeWidth={1} className={`duration-300 transition-all ${!filterShow.price && "rotate-180"}`} />
      </b>

      <div
        className={`flex flex-col duration-300 overflow-hidden items-center ${
          !filterShow.price ? "h-0" : "h-[125px] pt-2"
        }`}
      >
        <Slider defaultValue={[0]} max={3000000} onValueChange={handleRangeChange} className="w-full" />

        <p className="mt-4 self-start">
          {t("currentValue")}: {formatCurrency(filterState.rangeValue)}
        </p>

        <button className="mx-auto mt-6 rounded-[2px] py-[10px] w-full bg-black text-white hover:bg-white duration-300 border border-black hover:text-black font-semibold">
          {t("start")}
        </button>
      </div>
    </div>
  );
}

export default Phan1;
