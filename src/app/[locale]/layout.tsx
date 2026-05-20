// import { NextIntlClientProvider } from "next-intl";
// import { GiftIcon, MessageIcon } from "../../../public/icons";

// export function generateStaticParams() {
//   return [{ locale: "vi" }, { locale: "en" }];
// }

// export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {children}
//       <div className="fixed animate-shake  cursor-pointer bottom-20 right-2 lg:right-6 bg-[#eb1c23] rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
//         <MessageIcon className="lg:w-[46px] lg:h-[46px] h-9 w-9" />
//       </div>
//       <div className="fixed cursor-pointer bottom-6 right-2 lg:right-6 py-[6px] pl-9 pr-2 flex items-center justify-center bg-white text-sm shadow-md rounded-full">
//         <span className="text-[12px]">REWARDS</span>
//         <div className="bg-black ml-6 rounded-full w-9 h-9 flex items-center justify-center">
//           <GiftIcon />
//         </div>
//       </div>
//     </div>
//   );
// }

import { NextIntlClientProvider, useTranslations } from "next-intl";
import { GiftIcon, MessageIcon } from "../../../public/icons";

export function generateStaticParams() {
  return [{ locale: "vi" }, { locale: "en" }];
}

function FloatingWidgets() {
  const t = useTranslations("Reward");

  return (
    <>
      {/* MESSAGE BUTTON */}
      <div className="fixed animate-shake cursor-pointer bottom-20 right-2 lg:right-6 bg-[#eb1c23] rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
        <MessageIcon className="lg:w-[46px] lg:h-[46px] h-9 w-9" />
      </div>

      {/* REWARDS BUTTON */}
      <div className="fixed cursor-pointer bottom-6 right-2 lg:right-6 py-[6px] pl-9 pr-2 flex items-center justify-center bg-white text-sm shadow-md rounded-full">
        <span className="text-[12px]">{t("rewards")}</span>

        <div className="bg-black ml-6 rounded-full w-9 h-9 flex items-center justify-center">
          <GiftIcon />
        </div>
      </div>
    </>
  );
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <FloatingWidgets />
    </div>
  );
}
