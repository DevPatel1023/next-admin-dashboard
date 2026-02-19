"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

import { MdDashboard, MdShoppingCart, MdSchool } from "react-icons/md";
import { FaChartBar, FaCreditCard, FaTruck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoChatbox } from "react-icons/io5";
import { MdViewKanban } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { Bell, ChevronDown, CreditCard, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const dashboard1 = [
  { icon: MdDashboard, name: "Default", href: "/", visible: "true" },
  { icon: VscGraph, name: "CRM", href: "/crm", visible: "true" },
  { icon: FaCreditCard, name: "Finance", href: "/finance", visible: "true" },
  { icon: FaChartBar, name: "Analytics", href: "/", visible: "false" },
  { icon: MdShoppingCart, name: "E-commerce", href: "/", visible: "false" },
  { icon: MdSchool, name: "Academy", href: "/", visible: "false" },
  { icon: FaTruck, name: "Logistics", href: "/", visible: "false" },
];

const dashboard2 = [
  { icon: MdEmail, name: "Email", href: "/", visible: "false" },
  { icon: IoChatbox, name: "Chat", href: "/crm", visible: "false" },
  { icon: FaRegCalendar, name: "Calender", href: "/finance", visible: "false" },
  { icon: MdViewKanban, name: "Kanban", href: "/", visible: "false" },
  { icon: FaFileInvoice, name: "Invoice", href: "/", visible: "false" },
  { icon: ImUsers, name: "Users", href: "/", visible: "false" },
  { icon: FaLock, name: "Roles", href: "/", visible: "false" },
];

export function AppSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex gap-1 items-center hover:bg-gray-100 hover:cursor-pointer transition delay-150 duration-150 p-1 rounded-sm">
          <Image src="/logo.svg" width={18} height={18} alt="logo" />
          <span className="font-medium text-lg">studio Admin</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex items-start">
          <SidebarMenu className="space-y-1">
            <SidebarMenuItem className="space-x-2 mt-3">
              <Button
                size="sm"
                className="bg-blue-700  font-normal hover:bg-blue-600 pr-15"
              >
                <span className="flex items-center gap-1">
                  <IoIosAddCircleOutline />
                  <span>Quick Create</span>
                </span>
              </Button>
              <Button
                size="icon"
                className="bg-white text-black hover:bg-gray-100 transition delay-150 duration-150 shadow-sm"
              >
                <CiMail size="25" />
              </Button>
            </SidebarMenuItem>
            <p className="text-gray-800 font-normal text-sm mb-2 p-2">
              Dashboards
            </p>
            {dashboard1.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.name}>
                  {item.visible === "true" ? (
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <Icon />
                        <span className="text-[15px]">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <div className="flex items-center gap-3 justify-between p-2 text-gray-400 cursor-not-allowed opacity-70">
                      <div className="flex items-center gap-3">
                        <Icon />
                        <span className="text-[15px]">{item.name}</span>
                      </div>
                      <span className="text-gray-700 bg-gray-300 p-1 text-sm rounded-md ">
                        soon
                      </span>
                    </div>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu className="space-y-1">
            <p className="text-gray-800 font-normal text-sm mb-2 p-2">Pages</p>
            {dashboard2.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.name}>
                  {item.visible === "true" ? (
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <Icon />
                        <span className="text-[15px]">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <div className="flex items-center gap-3 justify-between p-2 text-gray-400 cursor-not-allowed opacity-70">
                      <div className="flex items-center gap-3">
                        <Icon />
                        <span className="text-[15px]">{item.name}</span>
                      </div>
                      <span className="text-gray-700 bg-gray-300 p-1 text-sm rounded-md ">
                        soon
                      </span>
                    </div>
                  )}
                </SidebarMenuItem>
              );
            })}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <FaFingerprint size={18} />
                  <span>Authentication</span>
                </span>

                <ChevronDown
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* ---------- CHILDREN ---------- */}
            {open && (
              <div className="ml-8 mt-1 space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild size="sm">
                    <Link href="/auth/login-v1">Login v1</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild size="sm">
                    <Link href="/auth/login-v2">Login v2</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild size="sm">
                    <Link href="/auth/register-v1">Register v1</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild size="sm">
                    <Link href="/auth/register-v2">Register v2</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem className="p-2 hover:bg-gray-100">
          <div className="flex gap-2 justify-between items-center text-sm grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid grid-cols-1">
              <span className="font-medium">Dev Patel</span>
              <span className="text-gray-500">hello@devpatel.com</span>
            </div>
            <div>
              <DropdownMenu>
                {/* CLICK TRIGGER */}
                <DropdownMenuTrigger asChild>
                  <button className="p-2 rounded-md hover:bg-gray-100 transition">
                    <BsThreeDotsVertical size={16} />
                  </button>
                </DropdownMenuTrigger>

                {/* DROPDOWN */}
                <DropdownMenuContent
                  align="end"
                  side="bottom"
                  sideOffset={8}
                  alignOffset={0}
                  className="w-60 translate-x-64 translate-y-15"
                >
                  {/* USER INFO */}
                  <div className="flex items-center gap-3 p-2">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>

                    <div className="grid">
                      <span className="font-medium">Dev Patel</span>
                      <span className="text-sm text-muted-foreground">
                        hello@devpatel.com
                      </span>
                    </div>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="hover:bg-gray-100 transition delay-150 duration-150">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </DropdownMenuItem>

                  <DropdownMenuItem className="hover:bg-gray-100 transition delay-150 duration-150">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>

                  <DropdownMenuItem className="hover:bg-gray-100 transition delay-150 duration-150">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="text-red-600 focus:text-red-600 hover:bg-gray-100 transition delay-150 duration-150">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
