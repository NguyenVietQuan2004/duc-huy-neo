"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const array = ["OUR BELIEF", "OUR TECHNOLOGY", "OUR INNOVATION", "CREATED BY NEOPERL", "OUR JOURNEY"];

function About() {
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
          src={
            "https://images.ctfassets.net/m9mcybwguwgq/52LUyCQOdLgNUzitxnhWf2/92cca0f0dfe35c5f4863ab10b3dae659/Consumer-Stage.jpg?w=1920&q=95&fm=webp"
          }
        />
        <div
          ref={titleRef}
          className={` ${
            titleInView ? "top-[20%] lg:top-1/2 opacity-100" : "top-full opacity-0"
          }  transition-all duration-1000    absolute left-0 lg:left-1/2 px-1 lg:px-0  text-center text-white lg:-translate-x-1/2 lg:-translate-y-1/2`}
        >
          <div className="text-[20px] lg:text-[38px]  font-semibold w-full lg:font-bold">
            KẾ THỪA SỰ TIÊN TIẾN <br /> TRONG CÔNG NGHỆ NƯỚC <br className="block lg:hidden" /> VÀ BỀN VỮNG
          </div>
          <div className="text-[50px] lg:text-[60px] font-thin my-4 lg:my-8">|</div>
          <div className="text-[20px] lg:text-[27px]  font-semibold lg:font-bold my-4 lg:mb-8">OUR PURPOSE</div>
          <div className="text-[12px]  font-bold">
            Neoperl tin rằng mỗi giọt nước đều quý giá. <br />
            Chúng tôi kết hợp hơn 60 năm kinh nghiệm Đức - Thụy Sĩ với công nghệ hiện đại <br />
            để tạo ra những giải pháp tiết kiệm nước thông minh, mang lại dòng chảy hoàn hảo <br />
            và bền vững cho mọi không gian sống.
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] grid grid-cols-1 lg:grid-cols-4 gap-40 px-5 mx-auto mt-20">
        <div className="hidden lg:block ">
          {array.map((item, index) => {
            const isActive = index === 0;
            return (
              <div key={index} className={`py-3 border-t font-semibold text-[12px] ${isActive && "text-orange-500"}`}>
                {item}
              </div>
            );
          })}{" "}
        </div>
        <div className="col-span-3">
          <div
            ref={beliefRef}
            className={`relative transition-all duration-1000 ${
              beliefRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px]">OUR BELIEF</h2>
            <div className="text-[12px] font-medium mb-4">
              Chúng tôi tin vào công nghệ nước thông minh và bền vững. <br />
              Neoperl không chỉ tập trung vào bề mặt mà còn đi sâu vào việc tối ưu hóa từng giọt nước, <br />
              giải quyết vấn đề lãng phí từ gốc rễ. Với chúng tôi, một sản phẩm tốt phải đảm bảo chất lượng nước uống,{" "}
              <br />
              tiết kiệm tài nguyên và mang lại trải nghiệm hoàn hảo cho người dùng. <br />
              Đó là lý do Neoperl tiên phong phát triển các giải pháp aerator và flow regulator hàng đầu thế giới.
            </div>

            <div>
              <Image
                alt=""
                width={2000}
                height={1000}
                className="w-full  object-cover"
                src={
                  "https://images.ctfassets.net/m9mcybwguwgq/48PIaAUt7q6nxpBnufzbLc/f7ac6d1bdeab6f66caa4685181964cfb/reinach.jpg?w=1920&q=95&fm=webp"
                }
              />
            </div>
          </div>

          <div
            ref={ingrediendRef}
            className={`relative transition-all duration-1000 ${
              ingrediendRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px] mt-20">OUR TECHNOLOGY</h2>
            <div className="text-[12px] font-medium mb-4">
              Aerator là "trái tim" của vòi nước hiện đại. <br />
              Neoperl đã nghiên cứu và hoàn thiện công nghệ này từ những năm 1959. <br />
              Từ việc tạo ra dòng nước không bắn tóe đến tích hợp công nghệ tiết kiệm nước PCA (Pressure Compensating
              Aerator), <br />
              chúng tôi liên tục cải tiến để mang lại hiệu suất cao nhất với lượng nước tối thiểu. <br />
              Mỗi linh kiện đều được chọn lọc kỹ lưỡng, kiểm tra nghiêm ngặt để đảm bảo độ bền và hiệu quả vượt trội.
            </div>

            <div>
              <Image
                alt=""
                width={2000}
                height={1000}
                className="w-full  object-cover"
                src={
                  "https://images.ctfassets.net/m9mcybwguwgq/6Cw363YPJxIQ7vzEudppii/022573af20b2cd030a33c485b14c834f/India_15106_UHD_Stills__1.11.1.jpg?w=1920&q=95&fm=webp"
                }
              />
            </div>
          </div>

          <div
            ref={innovationRef}
            className={`relative transition-all duration-1000 ${
              innovationRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px]  mt-20">OUR INNOVATION</h2>
            <div className="text-[12px] font-medium mb-4">
              Trung tâm Nghiên cứu & Phát triển Neoperl tại Müllheim (Đức) là nơi kết hợp hoàn hảo giữa truyền thống
              châu Âu và công nghệ hiện đại. <br />
              Từ những năm 1970, Neoperl đã dẫn đầu với aerator ít tiếng ồn. <br />
              Chúng tôi liên tục phát triển các sản phẩm tiết kiệm nước, van một chiều, vòi sen và ống nối thông minh.{" "}
              <br />
              Hơn 60 năm kinh nghiệm giúp Neoperl mang đến những giải pháp đột phá, đáp ứng tiêu chuẩn khắt khe nhất
              trên toàn cầu.
            </div>

            <div>
              <Image
                alt=""
                width={2000}
                height={1000}
                className="w-full  object-cover"
                src={
                  "https://amc.apglobal.com/image/384224417642/image_lhr5sv5qkh49v7t51ibr7ugb7o/-FJPG/brand_belief_content_img03_pc_vn_230613.jpg"
                }
              />
            </div>
          </div>

          <div
            ref={createdRef}
            className={`relative transition-all duration-1000 ${
              createdRefInView ? "bottom-0 opacity-100" : "-bottom-32 opacity-0"
            }`}
          >
            <h2 className="font-medium lg:font-semibold text-[37px] lg:text-[46px]  mt-20">CREATED BY NEOPERL</h2>
            <div className="text-[12px] font-medium mb-4">
              Mỗi sản phẩm Neoperl là kết tinh của sự chính xác Đức - Thụy Sĩ và cam kết bền vững. <br />
              Chúng tôi tạo ra những giải pháp không chỉ bền bỉ theo thời gian mà còn thân thiện với môi trường. <br />
              Từ nhà bếp đến phòng tắm, Neoperl đồng hành cùng hàng triệu gia đình và dự án trên toàn thế giới.
            </div>

            <div className="grid grid-cols-3 gap-8">
              <Image
                alt=""
                width={500}
                height={500}
                className="w-full  object-cover"
                src={
                  "https://images.ctfassets.net/m9mcybwguwgq/5KuaFrgSJOAMdkdTEor0La/18e7fb598ea7c45632f5033284e1038b/Neoperl_Forschungs--und-Entwicklungszentrum.jpg?w=1920&q=95&fm=webp"
                }
              />

              <Image
                alt=""
                width={500}
                height={500}
                className="w-full  object-cover"
                src={
                  "https://images.ctfassets.net/m9mcybwguwgq/4zegNYtsZyBMX0T0zNi5Qs/65f744febc0df3fc95e66318e4353f22/DE_15106_UHD_Stills__2.20.1.jpg?w=1920&q=95&fm=webp"
                }
              />

              <Image
                alt=""
                width={500}
                height={500}
                className="w-full  object-cover"
                src={
                  "https://images.ctfassets.net/m9mcybwguwgq/3nStiqFQTKCLIb8mEFo3Ke/66380a43cd8f56d244d07fe815d5c49a/DE_RobotsKPO15106_UHD_Stills__2.21.1.jpg?w=1920&q=95&fm=webp"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
