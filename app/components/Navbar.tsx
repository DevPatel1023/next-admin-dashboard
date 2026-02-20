"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, CreditCard, LogOut, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 border-b">
      <div className="flex items-center">
        <SidebarTrigger />

        <Input
          placeholder="Search"
          className="border border-transparent
    focus-visible:border-white
    focus-visible:ring-0
    focus-visible:outline-none
"
        />
      </div>
      {/* btns */}

      <div className="space-x-2 grid grid-cols-3 items-center">
        <Button
          size="icon"
          className="bg-blue-700 text-white hover:bg-blue-600"
        >
          <IoSettingsOutline />
        </Button>
        <Button
          size="icon"
          className="bg-blue-700 text-white hover:bg-blue-600"
        >
          <FaRegMoon />
        </Button>

        <div>
          <DropdownMenu>
            {/* CLICK TRIGGER */}
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {/* DROPDOWN */}
            <DropdownMenuContent
              align="start"
              side="bottom"
              sideOffset={8}
              alignOffset={0}
              className="w-60 translate-y-2"
            >
              {/* USER INFO */}
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 transition delay-150 duration-150 rounded-sm">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>

                <div className="grid">
                  <span className="font-medium">Dev Patel</span>
                  <span className="text-sm text-muted-foreground">
                    Administrator
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 transition delay-150 duration-150 rounded-sm">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.sjs" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>

                <div className="grid">
                  <span className="font-medium">Dev Patel</span>
                  <span className="text-sm text-muted-foreground">
                    Admin
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
    </header>
  );
}
