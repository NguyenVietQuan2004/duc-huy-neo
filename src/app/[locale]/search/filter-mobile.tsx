"use client";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, FilterIcon } from "../../../../public/icons";
import Phan1 from "../category/[categoryName]/_components/phan1";
import { filterShowProps, filterStateProps } from "../category/[categoryName]/page";

interface FilterMobileProps {
  filterShow: filterShowProps;
  filterState: filterStateProps;
  handleRangeChange: (e: number[]) => void;
  setFilterShow: React.Dispatch<React.SetStateAction<filterShowProps>>;
}

function FilterMobile({ filterShow, filterState, handleRangeChange, setFilterShow }: FilterMobileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isShowfilterMobile, setIsShowfilterMobile] = useState(false);

  useEffect(() => {
    // Chặn cuộn khi overlay mở
    if (isShowfilterMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowfilterMobile]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsShowfilterMobile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      <div className=" lg:hidden  p-1 mt-6 border inline-block ml-6 border-zinc-700">
        <FilterIcon onClick={() => setIsShowfilterMobile(true)} />
      </div>

      <div
        className={` ${
          isShowfilterMobile ? " visible" : " invisible "
        } fixed w-[100vw]  top-0 bottom-0  right-0  z-[999] bg-[rgba(0,0,0,0.3)]`}
      >
        <div
          ref={containerRef}
          className={`   ${
            isShowfilterMobile ? "opacity-100 left-0 " : "  -left-full opacity-0"
          } absolute left-0  w-[90vw] p-5 pt-0 text-sm duration-500 top-0 bottom-0  bg-white `}
        >
          <div className="pb-6 pr-1 pt-[6px]   items-center flex justify-between">
            <div></div>
            <div className="pt-3 pb-3" onClick={() => setIsShowfilterMobile(false)}>
              <CloseIcon />
            </div>
          </div>

          <div>
            <Phan1
              filterShow={filterShow}
              filterState={filterState}
              handleRangeChange={handleRangeChange}
              setFilterShow={setFilterShow}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterMobile;
