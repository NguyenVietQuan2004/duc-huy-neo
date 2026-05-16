// import Image from "next/image";
// import {
//   AmexIcon,
//   FacebookIcon,
//   InstagramIcon,
//   PaypalIcon,
//   TiktokIcon,
//   VisaIcon,
//   YoutubeIcon,
//   ZaloIcon,
// } from "../../public/icons";
// import { ReactNode } from "react";
// import FooterItem from "./footer-item";
// import { footer } from "@/app/(trangchu)/_components/data";

// const text =
//   "CÔNG TY TNH AMOREPACIFIC VIỆT NAM CNĐKDN: 0309984165 - Ngày cấp 05/05/2010, được sửa đổi lần thứ 21 ngày 04 tháng 04 năm 2022. <br/>  GIẤY PHÉP BÁN LẺ SỐ 0309984165/KD-0220 - CẤP LẦN ĐẦU NGÀY 03/10/2018 <br /> - ĐIỀU CHỈNH LẦN 2 NGÀY 21/04/2022 Cơ quan cấp: Phòng Đăng kí kinh doanh - Sở Kế hoạch và Đầu tư TP.HCM <br /> Địa chỉ đăng ký kinh doanh: Lầu 4A, Toà nhà Vincom, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.<br/> SĐT: (+84)-865-000-770 <br/> Email: sulwhasoo@vn.sulwhasoo.com <br/>  AMOREPACIFIC. All Rights Reserved.";

// function Icon({ children }: { children: ReactNode }) {
//   return (
//     <a
//       href="#"
//       className="relative before:absolute before:content-[''] before:w-full before:h-full before:rounded-full before:bg-transparent before:border-2 before:border-white hover:before:scale-[1.4] before:duration-300   p-3 border border-white text-[#282828] bg-white rounded-full cursor-pointer w-10 h-10 flex items-center justify-center"
//     >
//       {children}
//     </a>
//   );
// }

// function Footer() {
//   return (
//     <div className="bg-[#232323] text-white py-10">
//       <div className=" max-w-[1240px] px-5 mx-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6">
//         {footer.map((item, index) => {
//           return <FooterItem key={index} item={item} />;
//         })}
//         <div className="lg:col-span-2">
//           <span className="text-[15px] block text-[#CFCFB4] font-medium mb-2">ĐĂNG KÝ THEO DÕI TIN TỨC SULWHASOO</span>
//           <div className="flex gap-2">
//             <input placeholder="Enter your email address " className="px-[15px] py-[10px] text-[12px] w-full" />
//             <button className="border border-[#CFCFCF]   px-8">SUBMIT</button>
//           </div>
//           <div className="flex gap-2">
//             <input type="checkbox" className="w-4 border-none" />
//             <div className="text-[#808080] text-[16px] mt-2">
//               Bằng cách nhấp vào nút "Đăng ký", bạn đồng ý nhận thông tin sản phẩm thương hiệu Sulwhasoo và Amore
//               Pacific Việt Nam và thông tin quảng cáo.
//             </div>
//           </div>
//           <span className="text-[15px] block text-[#CFCFB4] font-medium  mt-20 mb-2">KẾT NỐI VỚI SULWHASOO</span>
//           <div className="flex gap-4">
//             <Icon>
//               <FacebookIcon />
//             </Icon>
//             <Icon>
//               <InstagramIcon />
//             </Icon>
//             <Icon>
//               <TiktokIcon />
//             </Icon>
//             <Icon>
//               <YoutubeIcon />
//             </Icon>
//             <Icon>
//               <ZaloIcon />
//             </Icon>
//           </div>
//         </div>
//       </div>
//       <div className="h-[2px] bg-white my-10"></div>
//       <div className=" mt-1 max-w-[1240px] px-5 mx-auto  flex items-center flex-col lg:flex-row justify-between">
//         <div>
//           <div className="mb-10 lg:mb-0">
//             <Image
//               alt=""
//               width={500}
//               height={500}
//               className="object-cover w-[400px]"
//               src={
//                 "https://amc.apglobal.com/asset/384224417642/image_csfsehuohp2mfdladloh8jss0v?content-disposition=inline"
//               }
//             />
//           </div>
//           <div
//             className="text-[12px] leading-[30px] font-medium text-center lg:text-start"
//             dangerouslySetInnerHTML={{ __html: text }}
//           />
//         </div>
//         <div className="flex gap-2 pt-6 lg:pt-0 ">
//           <VisaIcon />
//           <PaypalIcon />
//           <AmexIcon />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <footer className="bg-[#f5f5f3] border-t border-[#e5e5e2] mt-2">
      <div className="max-w-[1216px] mx-auto px-6 py-4">
        <div className="max-w-[720px]">
          <h3
            className="
              text-[22px]
              lg:text-[28px]
              font-semibold
              text-[#4a4a49]
              mb-6
              tracking-[-0.3px]
            "
          >
            Công ty TNHH Thương Mại & Dịch Vụ DSE
          </h3>

          <div
            className="
              space-y-3
              text-[15px]
              lg:text-[16px]
              leading-[1.9]
              text-[#6b6b68]
              font-normal
            "
          >
            <p>Địa chỉ: 46F đường Nam Cao, Khu phố 8, phường Tăng Nhơn Phú, Tp. Hồ Chí Minh, Việt Nam.</p>

            <p>MST: 0319523727</p>
          </div>
        </div>

        <div className="mt-4 pt-2 border-t border-[#dfdfdb]">
          <p className="text-[14px] text-[#9a9a97] tracking-[0.2px]">
            © 2026 DSE Trading & Services Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
