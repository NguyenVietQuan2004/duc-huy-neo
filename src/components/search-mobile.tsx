import Search from "./search";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, SearchIcon } from "../../public/icons";

function SearchMobile() {
  const [isShowSearchMobile, setisShowSearchMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShowSearchMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowSearchMobile]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setisShowSearchMobile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
  return (
    <div>
      <SearchIcon width={"24px"} className={"-rotate-90 *:fill-black "} onClick={() => setisShowSearchMobile(true)} />
      <div
        className={` ${
          isShowSearchMobile ? " visible" : " invisible "
        } fixed w-[100vw]  top-0 bottom-0  right-0  z-[999] bg-[rgba(0,0,0,0.3)]`}
      >
        <div
          ref={containerRef}
          className={`   ${
            isShowSearchMobile ? "opacity-100 -left-0 " : "  -left-72 opacity-0"
          } absolute left-0  w-[90vw] text-sm overflow-auto pb-36 duration-500 top-0 bottom-0  bg-white `}
        >
          <div className=" px-[16px] pt-[6px] pb-[3px]  items-center flex justify-between">
            <div className="text-[18px] font-semibold">Search</div>
            <div className="pt-3 pb-3" onClick={() => setisShowSearchMobile(false)}>
              <CloseIcon />
            </div>
          </div>

          <div className="px-4">
            <Search isMobile={true} setisShowSearchMobile={setisShowSearchMobile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMobile;
