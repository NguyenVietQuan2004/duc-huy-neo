"use client";
import Image from "next/image";

interface SlideProductProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
  images: Array<string>;
}
function SlideProduct({ setCurrentImage, images }: SlideProductProps) {
  return (
    <div className="grid grid-cols-4 lg:flex flex-row xl:flex-col gap-6 xl:gap-2">
      {images.map((value, index) => {
        return (
          <div
            key={index}
            className="relative cursor-pointer select-none w-20 xl:w-16"
            onClick={() => setCurrentImage(value)}
          >
            <Image alt="" src={value} width={1000} height={1000} className=" w-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default SlideProduct;
