import Link from "next/link";
import { useRouter } from "next/navigation";

function DrawerItem2({
  item2,
  isShowCollapse2,
  index,
  index2,
  index1,
}: {
  index2: number;
  index1: number;
  index: number;
  item2: any;
  isShowCollapse2: boolean;
}) {
  return (
    <Link
      key={index2}
      href={`/category/${item2._id}?group=${index1 == 0 && "group"}`}
      className={`font-normal  ${
        isShowCollapse2 ? "opacity-100 h-auto  pl-5 py-1" : "opacity-0 h-0"
      }  flex items-center overflow-hidden duration-500 justify-between`}
    >
      {item2.name}
    </Link>
  );
}

export default DrawerItem2;
