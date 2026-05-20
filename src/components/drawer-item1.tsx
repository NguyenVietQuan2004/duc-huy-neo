// import { useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";

// import DrawerItem2 from "./drawer-item2";

// function DrawerItem1({
//   value,
//   isShowCollapse1,
//   index,
//   index1,
// }: {
//   index1: any;
//   value: any;
//   isShowCollapse1: boolean;
//   index: number;
// }) {
//   const [isShowCollapse2, setisShowCollapse2] = useState(false);
//   return (
//     <div
//       className={` ${
//         isShowCollapse1 ? "opacity-100 h-auto font-semibold pl-3 py-1" : "opacity-0 h-0"
//       } overflow-hidden duration-500`}
//     >
//       <div className="flex items-center justify-between" onClick={() => setisShowCollapse2(!isShowCollapse2)}>
//         {value.key1}
//         {value.value1?.length > 0 ? (
//           isShowCollapse2 ? (
//             <ChevronDown className="stroke-[1.5]" />
//           ) : (
//             <ChevronRight className="stroke-[1.5]" />
//           )
//         ) : (
//           ""
//         )}
//       </div>
//       {value.value1?.map((item2: any, index2: any) => {
//         return (
//           <DrawerItem2
//             index={index}
//             index1={index1}
//             index2={index2}
//             key={item2._id}
//             item2={item2}
//             isShowCollapse2={isShowCollapse2}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default DrawerItem1;

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import DrawerItem2 from "./drawer-item2";

function DrawerItem1({
  value,
  isShowCollapse1,
  index,
  index1,
}: {
  index1: any;
  value: any;
  isShowCollapse1: boolean;
  index: number;
}) {
  const [isShowCollapse2, setisShowCollapse2] = useState(false);
  const t = useTranslations();
  return (
    <div
      className={`${
        isShowCollapse1 ? "opacity-100 h-auto font-semibold pl-3 py-1" : "opacity-0 h-0"
      } overflow-hidden duration-500`}
    >
      {/* HEADER GROUP */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setisShowCollapse2(!isShowCollapse2)}
      >
        {/* {t(value.key1)} */}
        {t(value.key1)}

        {value.value1?.length > 0 &&
          (isShowCollapse2 ? <ChevronDown className="stroke-[1.5]" /> : <ChevronRight className="stroke-[1.5]" />)}
      </div>

      {/* ITEMS */}
      {value.value1?.map((item2: any, index2: any) => {
        return (
          <DrawerItem2
            index={index}
            index1={index1}
            index2={index2}
            key={item2._id}
            item2={item2}
            isShowCollapse2={isShowCollapse2}
          />
        );
      })}
    </div>
  );
}

export default DrawerItem1;
