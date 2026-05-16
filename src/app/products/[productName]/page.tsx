"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { ChevronRight, Star } from "lucide-react";
import { StarFilledIcon, TriangleDownIcon } from "@radix-ui/react-icons";

import SlideProduct from "./slide-product";
import { HeartIcon, ShareIcon } from "../../../../public/icons";
import ProductItem from "@/app/(trangchu)/_components/product-item";
import ListProduct from "@/app/(trangchu)/_components/list-product";
import { productsOne } from "@/app/(trangchu)/_components/data";
import { useParams } from "next/navigation";
import { categoriesProduct, products as Json } from "../../(trangchu)/_components/data-new";

function ProductDetail() {
  const { productName } = useParams();
  const product = Json[Number(productName) - 1];
  console.log(product);
  const list = Json.filter((item) => item.id_group_category == product.id_group_category);
  const productsRef = list;

  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(product.avatar?.[0] || "/images/default.png");
  const [isDesciption, setIsDescription] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlusQuantity = () => {
    setCurrentQuantity(currentQuantity + 1);
  };
  const handleMinusQuantity = () => {
    setCurrentQuantity(currentQuantity === 0 ? 0 : currentQuantity - 1);
  };

  return (
    <div className="max-w-[1240px] px-2 lg:px-5 mx-auto py-12 pb-32 mt-4 lg:mt-0 ">
      <div className="flex items-center gap-2 text-[12px] text-[#999999] ">
        Nhà <ChevronRight size={14} /> Products <ChevronRight size={14} />{" "}
        <span className="line-clamp-1 whitespace-nowrap">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-7 xl:gap-16 mt-10">
        <div className="flex flex-col-reverse xl:flex-row gap-6 col-span-4 justify-end ">
          <SlideProduct images={product.avatar} setCurrentImage={setCurrentImage} />
          <div className=" flex-1">
            <Image
              key={currentImage}
              alt=""
              src={currentImage}
              width={1000}
              height={1000}
              className="w-full object-cover animate-opacity"
            />
          </div>
        </div>
        <div className=" col-span-3 flex flex-col text-[12px] gap-3">
          <h2 className="text-[24px] font-semibold ">{product.name}</h2>
          <div className="text-[#eb1c23] flex gap-[2px]">
            <StarFilledIcon width={18} height={18} />
            <StarFilledIcon width={18} height={18} />
            <StarFilledIcon width={18} height={18} />
            <StarFilledIcon width={18} height={18} />
            <StarFilledIcon width={18} height={18} />
          </div>
          <span>{categoriesProduct[Number(product.id_category) - 1].name}</span>
          <div className="text-[22px] font-semibold">{formatCurrency(product.price || 0)}</div>
          <div className="text-[17px] flex items-center gap-2">
            <span>Trả sau đến 12 tháng với</span>
            <img alt="" src="https://assets.fundiin.vn/merchant/logo_transparent.png" />
          </div>
          <div className="text-white self-start p-1 pl-4 pr-20  rounded-sm    bg-gradient-to-r from-[#06DECD] to-[#744DEF]    text-[16px]">
            Giảm đến <span className="font-bold text-[#fffdc3]">100K</span> khi thanh toán qua <br /> Fundiin.{" "}
            <span className="font-bold underline cursor-pointer hover:opacity-85">xem thêm</span>
          </div>
          {/* <div>Size: 50ML</div>
          <div
            onClick={() => setIsShowSize(!isShowSize)}
            className="hidden lg:flex relative items-center justify-between p-4 w-[250px] select-none cursor-pointer border"
          >
            <span>50ml</span>
            <TriangleDownIcon />
            {isShowSize && (
              <div className="bg-white left-0 absolute top-[105%] w-full shadow-md">
                <div className="p-2 hover:bg-zinc-200">30ml</div>
                <div className="p-2 hover:bg-zinc-200">50ml</div>
              </div>
            )}
          </div> */}
          <div>Tổng phụ: {formatCurrency(2000000 * currentQuantity)}</div>
          <div>Số lượng:</div>
          <div className="flex gap-4 flex-col lg:flex-row lg:items-center ">
            <div className="py-2 border flex w-[120px] items-center justify-between">
              <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
                -
              </div>
              <span>{currentQuantity}</span>
              <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
                +
              </div>
            </div>
            <div className="border p-3 lg:h-full flex-1 duration-300 border-black flex items-center justify-center text-[18px] font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
              Thêm vào giỏ hàng
            </div>
            <ShareIcon className="hidden lg:block" />
          </div>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <HeartIcon /> ADD TO WISHLIST
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-[20px] text-center lg:text-start lg:text-2xl my-4 font-bold">Sản phẩm liên quan</h2>
        <ListProduct products={productsRef} />
      </div>

      <div className="mt-20">
        <div className="border-b flex items-center justify-center gap-10">
          <div
            className={`py-4 font-bold text-[20px]  ${
              isDesciption && "underline underline-offset-[24px]"
            }  decoration-[3px] cursor-pointer`}
            onClick={() => setIsDescription(true)}
          >
            Description
          </div>
          <div
            className={`py-4 font-bold text-[20px]  ${
              !isDesciption && "underline underline-offset-[24px]"
            }  decoration-[3px] cursor-pointer`}
            onClick={() => setIsDescription(false)}
          >
            Review
          </div>
        </div>
        {isDesciption ? (
          <div dangerouslySetInnerHTML={{ __html: product.content }} className="mt-10 text-[12px]"></div>
        ) : (
          <>
            <div className="mt-10">
              <div className="flex items-center justify-between px-5 lg:px-10">
                <div className="flex items-center gap-2">
                  <Star color="#eb1c23" />
                  <Star color="#eb1c23" />
                  <Star color="#eb1c23" />
                  <Star color="#eb1c23" />
                  <Star color="#eb1c23" />
                </div>
                <div className="bg-white border hover:bg-zinc-200 py-1 px-3">Write a review</div>
              </div>
              <div className="text-center mt-6">
                Be the first to <span className="underline cursor-pointer">write a review</span>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t flex justify-center  items-center flex-col">
              <div className="text-[18px] my-4 mb-10">Recently Viewed Products</div>
              <ProductItem item={productsOne} width="300px" />
            </div>
          </>
        )}
      </div>

      <div
        className={`fixed py-4 w-[100vw] bg-white shadow-2xl ${
          isScrolled ? "-bottom-[0]" : "-bottom-[80px]"
        } left-0 duration-700 z-30`}
      >
        <div className="max-w-[1240px] px-5 mx-auto flex items-center justify-between">
          <div className=" items-center gap-8 hidden lg:flex">
            <img alt="" src={currentImage} className="w-[45px] h-[45px] object-cover" />
            <div>
              <div className="text-[12px] max-w-[400px] line-clamp-1">
                {" "}
                |MỚI| Kem Chống Nắng Hằng Ngày Dưỡng Sáng Nâng Tông Sulwhasoo Daily Toneup Sunscreen
              </div>
              <div className="text-sm font-semibold">{formatCurrency(1400000)}</div>
            </div>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-4 ">
            <div className=" relative hidden lg:flex items-center h-full justify-between p-2 w-[190px] select-none cursor-pointer border">
              <span className="text-[12px]">50ml</span>
              <TriangleDownIcon />
            </div>

            <div className=" hidden lg:flex border h-[41.6px]  w-[120px] items-center justify-between">
              <div className="text-2xl px-4 cursor-pointer" onClick={handleMinusQuantity}>
                -
              </div>
              <span className="text-[12px]">{currentQuantity}</span>
              <div className="text-2xl px-4 cursor-pointer" onClick={handlePlusQuantity}>
                +
              </div>
            </div>

            <div className="border w-full text-[12px] px-3  h-[41.6px]  flex-1 duration-300 border-black flex items-center justify-center font-semibold text-white bg-black hover:text-black hover:bg-white cursor-pointer">
              Thêm vào giỏ hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
