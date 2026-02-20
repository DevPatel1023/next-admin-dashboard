"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
     
      {/* REQUIRED flex wrapper */}
      <div className="flex min-h-screen w-full">
        {/* SIDEBAR */}
        <AppSidebar />

        {/* CONTENT AREA */}
        <SidebarInset className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6 bg-muted/30">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}