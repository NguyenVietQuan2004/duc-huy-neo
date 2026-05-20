// "use client";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";
// import { useTranslations } from "next-intl";

// const array = ["OUR BELIEF", "OUR TECHNOLOGY", "OUR INNOVATION", "CREATED BY NEOPERL", "OUR JOURNEY"];

// function About() {
//   const t = useTranslations("About");

//   const [titleRef, titleInView] = useInView({
//     triggerOnce: true,
//     threshold: 0,
//   });

//   const [beliefRef, beliefRefInView] = useInView({
//     threshold: 0.1,
//   });

//   const [ingrediendRef, ingrediendRefInView] = useInView({
//     threshold: 0.1,
//   });

//   const [innovationRef, innovationRefInView] = useInView({
//     threshold: 0.1,
//   });

//   const [createdRef, createdRefInView] = useInView({
//     threshold: 0.1,
//   });

//   return (
//     <div className="pb-[100px] z-10">
//       <div className="relative ">
//         <Image
//           alt=""
//           width={2000}
//           height={1000}
//           className="w-full h-[100vh] object-cover"
//           src="https://images.ctfassets.net/m9mcybwguwgq/52LUyCQOdLgNUzitxnhWf2/92cca0f0dfe35c5f4863ab10b3dae659/Consumer-Stage.jpg?w=1920&q=95&fm=webp"
//         />

//         <div
//           ref={titleRef}
//           className={`${
//             titleInView ? "top-[20%] lg:top-1/2 opacity-100" : "top-full opacity-0"
//           } transition-all duration-1000 absolute left-0 lg:left-1/2 px-1 lg:px-0 text-center text-white lg:-translate-x-1/2 lg:-translate-y-1/2`}
//         >
//           <div className="text-[20px] lg:text-[38px] font-semibold w-full lg:font-bold">
//             {t("title")} <br />
//             {t("title2")} <br />
//             {t("title3")}
//           </div>

//           <div className="text-[50px] lg:text-[60px] font-thin my-4 lg:my-8">|</div>

//           <div className="text-[20px] lg:text-[27px] font-semibold lg:font-bold my-4 lg:mb-8">{t("purpose")}</div>

//           <div className="text-[12px] font-bold">
//             {t("purposeDescription1")} <br />
//             {t("purposeDescription2")} <br />
//             {t("purposeDescription3")} <br />
//             {t("purposeDescription4")}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[1240px] grid grid-cols-1 lg:grid-cols-4 gap-40 px-5 mx-auto mt-20">
//         <div className="hidden lg:block ">
//           {array.map((item, index) => {
//             const isActive = index === 0;
//             return (
//               <div key={index} className={`py-3 border-t font-semibold text-[12px] ${isActive && "text-orange-500"}`}>
//                 {item}
//               </div>
//             );
//           })}
//         </div>

//         <div className="col-span-3">
//           {/* BELIEF */}
//           <div
//             ref={beliefRef}
//             className={`relative transition-all duration-1000 ${
//               beliefRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
//             }`}
//           >
//             <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px]">{t("beliefTitle")}</h2>

//             <div className="text-[12px] font-medium mb-4">
//               {t("beliefDescription1")} <br />
//               {t("beliefDescription2")} <br />
//               {t("beliefDescription3")} <br />
//               {t("beliefDescription4")} <br />
//               {t("beliefDescription5")} <br />
//               {t("beliefDescription6")}
//             </div>

//             <Image
//               alt=""
//               width={2000}
//               height={1000}
//               className="w-full object-cover"
//               src="https://images.ctfassets.net/m9mcybwguwgq/48PIaAUt7q6nxpBnufzbLc/f7ac6d1bdeab6f66caa4685181964cfb/reinach.jpg?w=1920&q=95&fm=webp"
//             />
//           </div>

//           {/* TECHNOLOGY */}
//           <div
//             ref={ingrediendRef}
//             className={`relative transition-all duration-1000 ${
//               ingrediendRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
//             }`}
//           >
//             <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("technologyTitle")}</h2>

//             <div className="text-[12px] font-medium mb-4">
//               {t("technologyDescription1")} <br />
//               {t("technologyDescription2")} <br />
//               {t("technologyDescription3")} <br />
//               {t("technologyDescription4")} <br />
//               {t("technologyDescription5")}
//             </div>

//             <Image
//               alt=""
//               width={2000}
//               height={1000}
//               className="w-full object-cover"
//               src="https://images.ctfassets.net/m9mcybwguwgq/6Cw363YPJxIQ7vzEudppii/022573af20b2cd030a33c485b14c834f/India_15106_UHD_Stills__1.11.1.jpg?w=1920&q=95&fm=webp"
//             />
//           </div>

//           {/* INNOVATION */}
//           <div
//             ref={innovationRef}
//             className={`relative transition-all duration-1000 ${
//               innovationRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
//             }`}
//           >
//             <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("innovationTitle")}</h2>

//             <div className="text-[12px] font-medium mb-4">
//               {t("innovationDescription1")} <br />
//               {t("innovationDescription2")} <br />
//               {t("innovationDescription3")} <br />
//               {t("innovationDescription4")}
//             </div>

//             <Image
//               alt=""
//               width={2000}
//               height={1000}
//               className="w-full object-cover"
//               src="https://amc.apglobal.com/image/384224417642/image_lhr5sv5qkh49v7t51ibr7ugb7o/-FJPG/brand_belief_content_img03_pc_vn_230613.jpg"
//             />
//           </div>

//           {/* CREATED */}
//           <div
//             ref={createdRef}
//             className={`relative transition-all duration-1000 ${
//               createdRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
//             }`}
//           >
//             <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("createdTitle")}</h2>

//             <div className="text-[12px] font-medium mb-4">
//               {t("createdDescription1")} <br />
//               {t("createdDescription2")} <br />
//               {t("createdDescription3")}
//             </div>

//             <div className="grid grid-cols-3 gap-8">
//               <Image
//                 alt=""
//                 width={500}
//                 height={500}
//                 className="w-full object-cover"
//                 src="https://images.ctfassets.net/m9mcybwguwgq/5KuaFrgSJOAMdkdTEor0La/18e7fb598ea7c45632f5033284e1038b/Neoperl_Forschungs--und-Entwicklungszentrum.jpg?w=1920&q=95&fm=webp"
//               />
//               <Image
//                 alt=""
//                 width={500}
//                 height={500}
//                 className="w-full object-cover"
//                 src="https://images.ctfassets.net/m9mcybwguwgq/4zegNYtsZyBMX0T0zNi5Qs/65f744febc0df3fc95e66318e4353f22/DE_15106_UHD_Stills__2.20.1.jpg?w=1920&q=95&fm=webp"
//               />
//               <Image
//                 alt=""
//                 width={500}
//                 height={500}
//                 className="w-full object-cover"
//                 src="https://images.ctfassets.net/m9mcybwguwgq/3nStiqFQTKCLIb8mEFo3Ke/66380a43cd8f56d244d07fe815d5c49a/DE_RobotsKPO15106_UHD_Stills__2.21.1.jpg?w=1920&q=95&fm=webp"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("About");

  const menu = [t("beliefMenu"), t("technologyMenu"), t("innovationMenu"), t("createdMenu"), t("journeyMenu")];

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [beliefRef, beliefRefInView] = useInView({
    threshold: 0.1,
  });

  const [ingrediendRef, ingrediendRefInView] = useInView({
    threshold: 0.1,
  });

  const [innovationRef, innovationRefInView] = useInView({
    threshold: 0.1,
  });

  const [createdRef, createdRefInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="pb-[100px] z-10">
      <div className="relative ">
        <Image
          alt=""
          width={2000}
          height={1000}
          className="w-full h-[100vh] object-cover"
          src="https://images.ctfassets.net/m9mcybwguwgq/52LUyCQOdLgNUzitxnhWf2/92cca0f0dfe35c5f4863ab10b3dae659/Consumer-Stage.jpg?w=1920&q=95&fm=webp"
        />

        <div
          ref={titleRef}
          className={`${
            titleInView ? "top-[20%] lg:top-1/2 opacity-100" : "top-full opacity-0"
          } transition-all duration-1000 absolute left-0 lg:left-1/2 px-1 lg:px-0 text-center text-white lg:-translate-x-1/2 lg:-translate-y-1/2`}
        >
          <div className="text-[20px] lg:text-[38px] font-semibold w-full lg:font-bold">
            {t("title")} <br />
            {t("title2")} <br />
            {t("title3")}
          </div>

          <div className="text-[50px] lg:text-[60px] font-thin my-4 lg:my-8">|</div>

          <div className="text-[20px] lg:text-[27px] font-semibold lg:font-bold my-4 lg:mb-8">{t("purpose")}</div>

          <div className="text-[12px] font-bold">
            {t("purposeDescription1")} <br />
            {t("purposeDescription2")} <br />
            {t("purposeDescription3")} <br />
            {t("purposeDescription4")}
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] grid grid-cols-1 lg:grid-cols-4 gap-40 px-5 mx-auto mt-20">
        {/* MENU */}
        <div className="hidden lg:block ">
          {menu.map((item, index) => {
            const isActive = index === 0;
            return (
              <div
                key={index}
                className={`py-3 border-t font-semibold text-[12px] ${isActive ? "text-orange-500" : ""}`}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="col-span-3">
          {/* BELIEF */}
          <div
            ref={beliefRef}
            className={`relative transition-all duration-1000 ${
              beliefRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px]">{t("beliefTitle")}</h2>

            <div className="text-[12px] font-medium mb-4">
              {t("beliefDescription1")} <br />
              {t("beliefDescription2")} <br />
              {t("beliefDescription3")} <br />
              {t("beliefDescription4")} <br />
              {t("beliefDescription5")} <br />
              {t("beliefDescription6")}
            </div>

            <Image
              alt=""
              width={2000}
              height={1000}
              className="w-full object-cover"
              src="https://images.ctfassets.net/m9mcybwguwgq/48PIaAUt7q6nxpBnufzbLc/f7ac6d1bdeab6f66caa4685181964cfb/reinach.jpg?w=1920&q=95&fm=webp"
            />
          </div>

          {/* TECHNOLOGY */}
          <div
            ref={ingrediendRef}
            className={`relative transition-all duration-1000 ${
              ingrediendRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("technologyTitle")}</h2>

            <div className="text-[12px] font-medium mb-4">
              {t("technologyDescription1")} <br />
              {t("technologyDescription2")} <br />
              {t("technologyDescription3")} <br />
              {t("technologyDescription4")} <br />
              {t("technologyDescription5")}
            </div>

            <Image
              alt=""
              width={2000}
              height={1000}
              className="w-full object-cover"
              src="https://images.ctfassets.net/m9mcybwguwgq/6Cw363YPJxIQ7vzEudppii/022573af20b2cd030a33c485b14c834f/India_15106_UHD_Stills__1.11.1.jpg?w=1920&q=95&fm=webp"
            />
          </div>

          {/* INNOVATION */}
          <div
            ref={innovationRef}
            className={`relative transition-all duration-1000 ${
              innovationRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("innovationTitle")}</h2>

            <div className="text-[12px] font-medium mb-4">
              {t("innovationDescription1")} <br />
              {t("innovationDescription2")} <br />
              {t("innovationDescription3")} <br />
              {t("innovationDescription4")}
            </div>

            <Image
              alt=""
              width={2000}
              height={1000}
              className="w-full object-cover"
              src="https://amc.apglobal.com/image/384224417642/image_lhr5sv5qkh49v7t51ibr7ugb7o/-FJPG/brand_belief_content_img03_pc_vn_230613.jpg"
            />
          </div>

          {/* CREATED */}
          <div
            ref={createdRef}
            className={`relative transition-all duration-1000 ${
              createdRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">{t("createdTitle")}</h2>

            <div className="text-[12px] font-medium mb-4">
              {t("createdDescription1")} <br />
              {t("createdDescription2")} <br />
              {t("createdDescription3")}
            </div>

            <div className="grid grid-cols-3 gap-8">
              <Image
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
                src="https://images.ctfassets.net/m9mcybwguwgq/79iNrzDjbhSMLkMIdxRDLs/07a634b7c93278f34a93485f0cab57ce/0126_20010_follow_stageimage_02_def_web_4348.jpg?w=1920&q=95&fm=webp"
              />
              <Image
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
                src="https://images.ctfassets.net/m9mcybwguwgq/4zegNYtsZyBMX0T0zNi5Qs/65f744febc0df3fc95e66318e4353f22/DE_15106_UHD_Stills__2.20.1.jpg?w=1920&q=95&fm=webp"
              />
              <Image
                alt=""
                width={500}
                height={500}
                className="w-full object-cover"
                src="https://images.ctfassets.net/m9mcybwguwgq/3nStiqFQTKCLIb8mEFo3Ke/66380a43cd8f56d244d07fe815d5c49a/DE_RobotsKPO15106_UHD_Stills__2.21.1.jpg?w=1920&q=95&fm=webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
