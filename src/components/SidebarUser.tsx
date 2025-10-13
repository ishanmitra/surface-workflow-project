import Image from "next/image";
import { Button } from "./ui/button";

import User from "~/assets/user.jpg"

export function SidebarUser() {
  return (
    <Button
      variant="link"
      className="hover:no-underline justify-start text-base !h-11 p-0 flex ml-3 mr-3.5 gap-[11px]"
    >
        <Image src={User} alt="User" width={28} height={28} className="w-7 h-7 object-none rounded-full object-[-2px_-8px]"/>
        <div className="flex flex-col items-start leading-none">
            <p className="font-semibold">Chris Hood</p>
            <p className="text-xs text-[#6c7385] font-medium">hello@example.com</p>
        </div>
    </Button>
  );
}
