"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { categories, categoriesProduct } from "./data-new";

function DacTrung() {
  const [dactrungRef, dactrungRefInView] = useInView({
    threshold: 0.1,
  });

  const [kethuaRef, kethuaRefInView] = useInView({
    threshold: 0.1,
  });

  const [buocdauRef, buocdauRefInView] = useInView({
    threshold: 0.1,
  });

  const [thuchienngayRef, thuchienngayRefInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="pt-32 pb-10 max-w-[1240px] overflow-hidden px-5 mx-auto">
      <div ref={dactrungRef} className={`duration-1000 ${dactrungRefInView ? " opacity-100" : " opacity-0"} `}>
        <h2 className="text-3xl text-center mb-12">Đặc Trưng Của Neoperl</h2>
        <div className="overflow-auto flex pb-10 lg:pb-0 lg:grid grid-cols-4 gap-10">
          {categoriesProduct.map((item, index) => {
            if (index > 3) return null;
            return (
              <div key={index} className="min-w-full">
                <Image alt="" src={"/images/default.png"} width={400} height={400} className="object-cover w-full" />
                <div className="text-center text-xl">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ke thua */}

      <div
        ref={kethuaRef}
        className={` ${
          kethuaRefInView ? "left-0 opacity-100" : "left-72 opacity-0"
        }  grid grid-cols-1 relative duration-1000 lg:grid-cols-2 pt-36 gap-10`}
      >
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[31px] leading-[31px] font-semibold text-center mb-4">
            WATERTRAIN <br />
            WATER ON TRACKS
          </h2>
          <button className="rounded-full py-[10px] w-[235PX] hover:bg-black hover:text-white bg-white duration-300 border border-black text-black font-semibold">
            Tìm hiểu thêm
          </button>
        </div>
        <div className="overflow-hidden">
          <Image
            alt=""
            src="https://images.ctfassets.net/m9mcybwguwgq/16Ttgncn3QBUNMDuPyEr4Y/d6f7fca8164468fa1c42733d44069aa9/WT-components-description.png?w=1920&q=95&fm=webp"
            width={1000}
            height={1000}
            className="w-full hover:scale-105 duration-500 object-cover"
          />
        </div>
      </div>

      {/* Buoc dau */}

      <div
        ref={buocdauRef}
        className={`  ${
          buocdauRefInView ? "right-0 opacity-100" : "right-72 opacity-0"
        } grid grid-cols-1 relative duration-1000 lg:grid-cols-2 mt-8 lg:mt-0  gap-10`}
      >
        <div className="overflow-hidden">
          <Image
            alt=""
            src="https://images.ctfassets.net/m9mcybwguwgq/4cOw5MH3yYcwkRkTJFJXKF/217662f683b69773592c1e3d39d299a2/FSG_finger.png?w=1920&q=95&fm=webp"
            width={1000}
            height={1000}
            className="w-full hover:scale-105 duration-500 object-cover"
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[31px] leading-[31px] font-semibold text-center mb-4">
            New benchmark for <br /> faucet control solutions
          </h2>
          {/* <div className="text-center text-[#afa48e] text-[18px] mt-1 mb-4">
            Vẻ đẹp thuần khiết mang đến làn da rạng rỡ khỏe <br className="hidden lg:block" /> mạnh
          </div> */}
          <button className="py-[10px] rounded-full w-[235PX] hover:bg-black hover:text-white bg-white duration-300 border border-black text-black font-semibold">
            Tìm hiểu thêm
          </button>
        </div>
      </div>

      {/* Thuc hien ngay */}

      <div
        ref={thuchienngayRef}
        className={`pt-32 ${
          thuchienngayRefInView ? "-bottom-0 opacity-100" : "-bottom-72 opacity-0"
        } relative duration-1000 flex flex-col justify-center `}
      >
        <h2 className="text-3xl text-center  mb-12">
          {" "}
          Khám phá giải pháp phụ kiện tiết kiệm nước cho ngôi nhà của bạn
        </h2>
        <div className="flex  justify-center">
          <Image
            alt=""
            src={
              "https://images.ctfassets.net/m9mcybwguwgq/tmtlARv9voka6fgaPIp8z/3a38574f5851eb9087acce2d4d3d602e/NeoperlAboutUs-Stage.jpg?w=640&q=95&fm=webp"
            }
            width={1000}
            height={1000}
            className="object-cover w-full px-0 xl:px-40"
          />
        </div>
        <button className="mx-auto rounded-[2px] mt-20 py-[10px] w-[235PX] bg-black text-white hover:bg-white duration-300 border  border-black hover:text-black font-semibold">
          Bắt đầu
        </button>
      </div>
    </div>
  );
}

export default DacTrung;
