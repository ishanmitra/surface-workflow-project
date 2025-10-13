/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "~/components/ui/sidebar"

import Image from "next/image"
import Logo from '~/assets/surfacelabs.svg'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { ChevronDown, Circle } from "lucide-react"
import { PersonIcon } from '@shopify/polaris-icons';
import { SidebarButton } from "./SidebarButton"
import { sidebarItems } from "~/config/sidebarItems"
import { SidebarUser } from "./SidebarUser"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-0 mt-6 mx-5 mb-5">
                <Image src={Logo} alt="Logo" />
            </SidebarHeader>
            <SidebarContent className="p-0 mx-5 w-auto">
                <Separator className="bg-[#ddd]" />
                <Button variant="link" className="hover:no-underline text-base p-0 h-[27px] gap-3">
                    <PersonIcon className="!w-5 !h-5 ml-1" />
                    My Workspace
                    <ChevronDown className="!w-5 !h-5 ml-auto" />
                </Button>
                <Separator className="bg-[#ddd]" />
                <Button className="text-base py-2.5 h-10 gap-3 justify-start bg-[#383f50] hover:bg-[#383f50] shadow-[0px_1px_5px_0px_#0000001A]">
                    <Circle className="!w-5 !h-5 ml-1 p-[3.75px]" />
                    Getting Started
                </Button>
                <Separator className="bg-[#ddd]" />
                <SidebarGroup className="p-0 gap-1">
                    {sidebarItems.map(item => (
                        <SidebarButton key={item.label} label={item.label} Icon={item.icon} />
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarUser />
            </SidebarFooter>
        </Sidebar>
    )
}