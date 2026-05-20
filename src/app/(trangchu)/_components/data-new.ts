export const ImagesCarousel = [
  {
    image:
      "https://images.ctfassets.net/m9mcybwguwgq/52LUyCQOdLgNUzitxnhWf2/92cca0f0dfe35c5f4863ab10b3dae659/Consumer-Stage.jpg?w=1920&q=95&fm=webp",

    text1: "Original spare parts for kitchen and bathroom faucets and showers",
    textColor: "white",
    fontSize: 40,
  },
  {
    image:
      "https://images.ctfassets.net/m9mcybwguwgq/1m3XHoK5NFTfo0DzMMPAKC/fcd8638629182f09d693c8b1797f2eb7/260508_np_RedDotAward_Diamond_Website_Banner_3840x2160px__1_.jpg?w=1920&q=95&fm=webp",

    text1: "Diamond",
    text2:
      "The DIAMOND aerator creates a refined, diamond-like stream pattern for a luxurious water experience. [amazon.com]",
    text3: "Find out more",
    textColor: "",
    fontSize: 40,
  },
];

export const categories = [
  {
    id: 1,
    name: "Đầu vòi nước",
    slug: "Dau-voi-nuoc",
  },
  {
    id: 2,
    name: "Đầu lọc nước",
    slug: "Dau-loc-nuoc",
  },
  {
    id: 3,
    name: "Van điều chỉnh lưu lượng",
    slug: "Van-dieu-chinh-luu-luong",
  },
  {
    id: 4,
    name: "Dây cấp nước",
    slug: "Day-cap-nuoc",
  },
  {
    id: 5,
    name: "Dây sịt",
    slug: "Day-sit",
  },
  {
    id: 6,
    name: "Shower hose",
    slug: "Shower-hose",
  },
  {
    id: 7,
    name: "Phụ kiện",
    slug: "Phu-kien",
  },
];
export const categoriesProduct = [
  {
    id: 1,
    name: "Dòng wellness",
    slug: "Dong-wellness",
  },
  {
    id: 2,
    name: "Dòng Designer",
    slug: "Dong--Designer",
  },
  {
    id: 3,
    name: "Stylish",
    slug: "Stylish",
  },
  {
    id: 4,
    name: "Dòng tiết kiệm nước",
    slug: "Dong-tiet-kiem-nuoc",
  },
  {
    id: 5,
    name: "Heathly & Safety",
    slug: "Heathly-&-Safety",
  },
];
import { Item } from "@radix-ui/react-dropdown-menu";
import jsonPro from "./data.json";

export const products = jsonPro;

export const header = {
  cluster1: [
    {
      key: "Sản Phẩm",
      value: [
        {
          key1: "Nhóm danh mục",
          value1: categoriesProduct.map((item) => ({
            name: item.name,
            _id: item.id,
          })),
        },
        {
          key1: "Danh mục",
          value1: categories.map((item) => ({
            name: item.name,
            _id: item.id,
          })),
        },
      ],
      images: [
        "https://images.ctfassets.net/m9mcybwguwgq/4cOw5MH3yYcwkRkTJFJXKF/217662f683b69773592c1e3d39d299a2/FSG_finger.png?w=1920&q=95&fm=webp",
        "https://images.ctfassets.net/m9mcybwguwgq/5c2k0bCc6SnH0LJkufYU94/da6cf04e7975862e46d7b4cd4d3bed3f/Einbau2.png?w=1920&q=95&fm=webp",
        "https://images.ctfassets.net/m9mcybwguwgq/jljpdPSAYARRFgW68M0zk/b1e16fba7fd206aa1d30615235875ff3/CheckValves_04.jpg?w=640&q=95&fm=webp",
      ],
    },
  ],
};

// export const footer = [
//   {
//     key: "VỀ CHÚNG TÔI",
//     value: ["Niềm Tin Thương Hiệu", "Chiến Dịch Thương Hiệu", "Bài Đăng Sulwhasoo"],
//   },
//   {
//     key: "GHÉ THĂM SULWHASOO",
//     value: ["Tìm Cửa Hàng"],
//   },
//   {
//     key: "DỊCH VỤ KHÁCH HÀNG",
//     value: ["Câu Hỏi Thường Gặp", "Liên Lạc Với Chúng Tôi", "Liên Lạc Với Chúng Tôi"],
//   },
//   {
//     key: "THÔNG TIN",
//     value: [
//       "Chính Sách Bảo Mật",
//       "Điều Kiện & Thời Hạn Dịch Vụ",
//       "Chính Sách Hoàn Trả",
//       "Chính Sách Vận Chuyển",
//       "Điều Khoản & Điều Kiện Cho Thành Viên",
//       "SITEMAP",
//     ],
//   },
// ];
