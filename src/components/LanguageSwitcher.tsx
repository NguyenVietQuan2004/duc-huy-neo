"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "vi";

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;

    const newPath = segments.join("/");

    router.replace(newPath);
    router.refresh(); // 🔥 QUAN TRỌNG: ép re-render server + i18n context
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => changeLanguage(e.target.value)}
      className="
    px-3 py-2
    border-none
    outline-none
    ring-0
    focus:outline-none
    focus:ring-0
    bg-white
    text-sm
    cursor-pointer
    appearance-none
  "
    >
      <option value="vi">Vi</option>
      <option value="en">En</option>
    </select>
  );
}
