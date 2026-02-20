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
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  MdDashboard,
  MdShoppingCart,
  MdSchool,
  MdEmail,
  MdViewKanban,
} from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import {
  FaChartBar,
  FaCreditCard,
  FaTruck,
  FaRegCalendar,
  FaFileInvoice,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { ImUsers } from "react-icons/im";

import { Bell, ChevronDown, CreditCard, LogOut, User } from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA CONFIG */
/* ------------------------------------------------------------------ */

const dashboards = [
  { icon: MdDashboard, name: "Default", href: "/", enabled: true },
  { icon: VscGraph, name: "CRM", href: "/crm", enabled: true },
  { icon: FaCreditCard, name: "Finance", href: "/finance", enabled: true },
  { icon: FaChartBar, name: "Analytics", enabled: false },
  { icon: MdShoppingCart, name: "E-commerce", enabled: false },
  { icon: MdSchool, name: "Academy", enabled: false },
  { icon: FaTruck, name: "Logistics", enabled: false },
];

const pages = [
  { icon: MdEmail, name: "Email", enabled: false },
  { icon: IoChatbox, name: "Chat", enabled: false },
  { icon: FaRegCalendar, name: "Calendar", enabled: false },
  { icon: MdViewKanban, name: "Kanban", enabled: false },
  { icon: FaFileInvoice, name: "Invoice", enabled: false },
  { icon: ImUsers, name: "Users", enabled: false },
  { icon: FaLock, name: "Roles", enabled: false },
];

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

export function AppSidebar() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Sidebar>
      {/* ---------------------------------------------------------------- */}
      {/* HEADER */}
      {/* ---------------------------------------------------------------- */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Image src="/logo.svg" width={18} height={18} alt="logo" />
              <span>Studio Admin</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ---------------------------------------------------------------- */}
      {/* CONTENT */}
      {/* ---------------------------------------------------------------- */}
      <SidebarContent>
        {/* ACTIONS */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button size="default">
                <IoIosAddCircleOutline />
                Quick Create
              </Button>

              <Button size="icon" variant="outline">
                <CiMail />
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* DASHBOARDS */}
        <SidebarGroup>
          <SidebarMenu>
            {dashboards.map(({ icon: Icon, name, href, enabled }) => (
              <SidebarMenuItem key={name}>
                {enabled ? (
                  <SidebarMenuButton asChild>
                    <Link href={href!}>
                      <Icon />
                      <span>{name}</span>
                    </Link>
                  </SidebarMenuButton>
                ) : (
                  <SidebarMenuButton disabled>
                    <Icon />
                    <span>{name}</span>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* PAGES */}
        <SidebarGroup>
          <SidebarMenu>
            {pages.map(({ icon: Icon, name, enabled }) => (
              <SidebarMenuItem key={name}>
                <SidebarMenuButton disabled={!enabled}>
                  <Icon />
                  <span>{name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            {/* AUTH COLLAPSE */}
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setAuthOpen(!authOpen)}>
                <div className="flex items-center justify-between">
                  <div>
                    <div>
                      <FaFingerprint />
                    </div>
                    <span>Authentication</span>
                  </div>
                  <div>
                    <ChevronDown className={authOpen ? "rotate-180" : ""} />
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {authOpen && (
              <SidebarMenu className="ml-4">
                {[
                  { label: "Login v1", href: "/auth/login-v1" },
                  { label: "Login v2", href: "/auth/login-v2" },
                  { label: "Register v1", href: "/auth/register-v1" },
                  { label: "Register v2", href: "/auth/register-v2" },
                ].map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild size="sm">
                      <Link href={item.href}>{item.label}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ---------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ---------------------------------------------------------------- */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div>
                    <span>Dev Patel</span>
                    <span className="block text-xs text-muted-foreground">
                      hello@devpatel.com
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User /> Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell /> Notifications
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
