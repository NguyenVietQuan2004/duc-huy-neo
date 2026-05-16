"use client";
import ProductItem from "./product-item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface productProps {
  products: Array<any>;
}

function ListProduct({ products }: productProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 4,
      }}
    >
      <CarouselContent className="">
        {products.map((item, index) => {
          return (
            <CarouselItem key={index} className="relative  basis-1/2 lg:basis-1/4 select-none">
              <ProductItem item={item} key={index} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-12 hidden lg:flex" />
      <CarouselNext className="right-12  hidden lg:flex" />
    </Carousel>
  );
}

export default ListProduct;
