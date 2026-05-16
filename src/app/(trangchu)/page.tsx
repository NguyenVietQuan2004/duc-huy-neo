import DacTrung from "./_components/dac-trung";
import SaleProducts from "./_components/sale-products";
import Carousel from "@/app/(trangchu)/_components/carousel";
import DongNhanSamCoDac from "./_components/dong-nhan-sam-co-dac";
import BestSellerProducts from "@/app/(trangchu)/_components/best-seller-products";

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Carousel />
      <BestSellerProducts />
      <DongNhanSamCoDac />
      <SaleProducts />
      <DacTrung />
    </div>
  );
}
