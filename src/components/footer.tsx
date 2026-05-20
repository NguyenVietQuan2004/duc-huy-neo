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
