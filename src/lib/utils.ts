import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatCurrency(amount: number) {
  // Chuyển số thành chuỗi và định dạng với dấu chấm
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Thêm ký hiệu tiền tệ 'đ'
  return `${formattedAmount}đ`;
}
