"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator";
import { Bot, Star, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./dashboard-user-button";
const Dashboard = () => {

    const pathname = usePathname();

    const firstSection = [
        {
            title: "Meetings",
            url: "/meetings",
            icon: Video
        },
        {
            title: "Agents",
            url: "/agents",
            icon: Bot
        },
    ]

    const secondSection = [
        {
            title: "Upgrade",
            url: "/upgrade",
            icon: Star
        }
    ]

    return ( 
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src="/logo.svg" height={36} width={36} alt="logo"/>
                    <p className="text-2xl font-semibold">Meet.AI</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-100 text-[black border]" />
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton asChild className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6b68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.url && "border-white"
                                    )}
                                    isActive={pathname === item.url}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="size-5"/>
                                            <span className="text-sm font-medium tracking-tight">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <div className="px-4 py-2">
                            <Separator className="opacity-100 text-[black border]" />
                        </div>
                        <span className="my-2 h-px w-full bg-black/20"/>
                        <SidebarMenu>
                            <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton asChild className={cn(
                                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6b68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.url && "border-white"
                                    )}
                                    isActive={pathname === item.url}
                                    >
                                        <a href={item.url}>
                                            <item.icon className="size-5"/>
                                            <span className="text-sm font-medium tracking-tight">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-black">
                <DashboardUserButton />
            </SidebarFooter>
        </Sidebar>
     );
}
 
export default Dashboard;