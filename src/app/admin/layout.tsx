import * as React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building,
  Briefcase,
  FileText,
  LogOut,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdminHeader } from "@/components/admin/admin-header"; // Assume this component exists for header content inside inset

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Add authentication check here. If not logged in, redirect to /admin/login.
  // This is a placeholder layout. Authentication needs to be implemented.

  return (
    <SidebarProvider defaultOpen>
      <Sidebar collapsible="icon">
        <SidebarHeader className="items-center justify-between">
           <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
                <Sun className="h-5 w-5 text-primary" />
                <span>HSBI Admin</span>
            </Link>
          <SidebarTrigger className="hidden md:flex" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <Link href="/admin/dashboard">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Mitarbeiter">
                <Link href="/admin/employees">
                  <Briefcase />
                  <span>Mitarbeiter</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Standorte">
                <Link href="/admin/locations">
                  <Building />
                  <span>Standorte</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Mitglieder">
                <Link href="/admin/members">
                  <Users />
                  <span>Mitglieder</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Gehaltsabrechnungen">
                <Link href="/admin/payroll">
                  <FileText />
                  <span>Gehaltsabrechnungen</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Logout">
                 {/* Add logout functionality here */}
                 <Button variant="ghost" className="w-full justify-start">
                    <LogOut />
                    <span>Logout</span>
                 </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
       <SidebarInset>
           {/* Admin Header could go here if needed inside the main content area */}
           {/* <AdminHeader /> */}
          <div className="p-4 md:p-6 lg:p-8">
            {children}
          </div>
       </SidebarInset>
    </SidebarProvider>
  );
}
