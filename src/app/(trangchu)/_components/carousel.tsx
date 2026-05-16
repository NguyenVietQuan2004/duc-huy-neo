"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ImagesCarousel } from "./data-new";

function Slider() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {ImagesCarousel.map((item, index) => {
            return (
              <CarouselItem key={index} className="  h-[500px] relative select-none">
                <Image
                  alt=""
                  // width={2000}
                  // height={200}
                  fill
                  src={item.image}
                  className="h-[100vh] lg:h-auto xl:w-[100vw] object-cover"
                />
                <div
                  className="absolute left-8 lg:left-48 top-[25%] lg:top-1/2 px-7 font-bold py-7 mt-20 md:mt-0 -translate-y-1/2 w-[350px] md:w-[600px]"
                  style={{ color: item.textColor }}
                >
                  {/* <div className="text-[18px] underline font-medium  mb-3">{item.text3}</div> */}
                  <h2
                    // style={{
                    //   // fontSize: item.fontSize + "px",
                    //   lineHeight: 45 + 4 + "px",
                    // }}
                    className={`text-[20px] leading-8 xl:leading-[49px] select-none xl:text-[45px]`}
                    dangerouslySetInnerHTML={{ __html: item.text1 }}
                  />
                  <div className="text-[18px] mt-2 mb-7  font-normal">{item.text2}</div>
                  {item.text3 && (
                    <button
                      className="
    w-[160px]
    h-[48px]
    px-2
    text-[15px]
    rounded-full
    bg-[#d71920]
    text-white
    font-semibold
    tracking-[0.2px]
    transition-all
    duration-300
    hover:bg-[#eb3137]
    hover:scale-[1.02]
    active:scale-[0.98]
  "
                    >
                      {item.text3}
                    </button>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-12 hidden lg:flex" />
        <CarouselNext className="right-12 hidden lg:flex" />
      </Carousel>
    </div>
  );
}

export default Slider;
