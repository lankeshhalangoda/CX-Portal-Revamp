"use client"

import type React from "react"

import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, FileText, LayoutDashboard, MessageSquare, Package, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Logo } from "@/components/logo"

export function DashboardShell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SidebarProvider defaultOpen={true} open={open} onOpenChange={setOpen}>
        <div className="flex min-h-screen w-full bg-muted/10">
          <Sidebar className="border-r border-border/50">
            <SidebarHeader className="flex h-14 items-center border-b px-4">
              <Logo />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="#" className="flex items-center gap-3">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      <span>Collateral</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>Accounts</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5" />
                      <span>Messaging</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5" />
                      <span>Analytics</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-3">
                      <Package className="h-5 w-5" />
                      <span>Products</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john@emojot.com</span>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 overflow-auto">
            <main className={cn("container mx-auto py-6", className)}>{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
