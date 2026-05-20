"use client";
import { useState } from "react";
import { SearchIcon } from "../../public/icons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
function Search({
  isMobile,
  setisShowSearchMobile,
}: {
  isMobile?: boolean;
  setisShowSearchMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!searchValue) return;
    e.preventDefault();
    setSearchValue("");
    if (setisShowSearchMobile) {
      setisShowSearchMobile(false);
    }
    router.push(`/search?q=${searchValue}`);
  };
  const t = useTranslations("SearchMobile");
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${
          isMobile ? "justify-between" : ""
        } flex  bg-[#fafafa] items-center  shadow-[0_1px_0_0_rgba(0,0,0,0.1)]`}
      >
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          // placeholder="Tìm kiếm"
          placeholder={t("search")}
          className={`${
            isMobile ? "py-4 px-2" : " px-[10px] py-[4px]"
          } w-[130px] placeholder:text-[12px] text-[12px] focus:placeholder-transparent placeholder:text-zinc-900 bg-transparent outline-none border-none `}
        />
        <button className="px-[10px]">
          <SearchIcon width={14} height={14} className="-rotate-90 font-bold" />
        </button>
      </div>
    </form>
  );
}

export default Search;
