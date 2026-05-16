"use client";

import ContactForm from "./form";

function ContactClient() {
  // FIX CỨNG GIÁ TRỊ → tránh hydration mismatch
  const img =
    "https://images.ctfassets.net/m9mcybwguwgq/52LUyCQOdLgNUzitxnhWf2/92cca0f0dfe35c5f4863ab10b3dae659/Consumer-Stage.jpg?w=1920&q=95&fm=webp";

  const phone = "0319 523 727";

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(50%)",
          }}
        />

        <div className="relative max-w-[1140px] py-[120px] h-full pt-[160px] lg:pt-[120px] mx-auto px-4">
          <div className="text-white max-w-[540px]">
            <div className="text-[18px]">CONTACT</div>
            <div className="text-[18px] lg:text-[36px] font-bold">
              Do you have a question or a comment? Do you want to know more about Neoperl and our products?
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] px-4 mx-auto text-[18px] font-light py-20 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="flex flex-col gap-8">
            <div>
              {/* <h3 className="font-bold">BMB Garage – Trung Tâm Chăm Sóc Xe</h3> */}

              <p>Địa chỉ: 46F đường Nam Cao, Khu phố 8, phường Tăng Nhơn Phú, Tp. Hồ Chí Minh, Việt Nam.</p>

              {/* Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3424151243216!2d106.79337714397654!3d10.861539661768079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275ce9d383e5%3A0x1f416ed68b7379d7!2zNDYgxJAuIE5hbSBDYW8sIFTEg25nIE5oxqFuIFBow7osIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1778911709742!5m2!1svi!2s"
                className="w-full h-[200px] mt-2"
                loading="lazy"
              />

              {/* FIX CỨNG PHONE → không dùng map/filter */}
              <div className="mt-4 text-base">
                <span className="font-semibold">SĐT liên hệ:</span> {phone}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-[#124D9B] text-4xl leading-[48px] font-bold mb-6">
              ĐỂ LẠI LỜI NHẮN CHO <br />
              TRUNG TÂM
            </h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactClient;
