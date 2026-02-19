"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
