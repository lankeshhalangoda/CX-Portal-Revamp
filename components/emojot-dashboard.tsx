"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Briefcase,
  Building,
  ShieldCheck,
  Lock,
  CheckCircle,
  BriefcaseIcon,
  Wrench,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  Globe,
  ArrowUpRight,
  Menu,
  Sparkles,
  Send,
  X,
  Minimize2,
  User,
  FileImage,
  Video,
  Presentation,
  BookOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend,
  Cell,
} from "recharts"

// Demo chat messages
const demoChatMessages = [
  {
    id: 1,
    type: "bot",
    message: "Hello! I'm Emosight, your AI assistant. How can I help you today?",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    type: "user",
    message: "Can you help me find sales collateral for our Q4 campaign?",
    timestamp: "2:31 PM",
  },
  {
    id: 3,
    type: "bot",
    message: "I'd be happy to help! I found 12 relevant sales materials for Q4. Here are the top 3 recommendations:",
    timestamp: "2:31 PM",
  },
  {
    id: 4,
    type: "bot",
    message:
      "• Q4 Sales Deck - Updated last week\n• Customer Success Stories - 15 new cases\n• Product Demo Videos - Latest features\n\nWould you like me to show you any specific one?",
    timestamp: "2:31 PM",
  },
]

export function EmojotDashboard() {
  const [activeNav, setActiveNav] = useState("sales")
  const [selectedAccount, setSelectedAccount] = useState("intranet")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMinimized, setChatMinimized] = useState(false)
  const [chatMessages, setChatMessages] = useState(demoChatMessages)
  const [newMessage, setNewMessage] = useState("")
  const [collateralExpanded, setCollateralExpanded] = useState(false)

  const accounts = [
    { id: "intranet", name: "Intranet", icon: Globe },
    { id: "client-portal", name: "Client Portal", icon: Users },
    { id: "admin", name: "Admin Panel", icon: Settings },
  ]

  // Sample data for charts
  const lineChartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 280 },
    { name: "May", value: 590 },
    { name: "Jun", value: 320 },
    { name: "Jul", value: 480 },
  ]

  const barChartData = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 15 },
    { name: "Wed", value: 25 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 30 },
    { name: "Sat", value: 28 },
    { name: "Sun", value: 15 },
  ]

  const pieChartData = [
    { name: "Sales", value: 400, color: "#3b82f6" },
    { name: "Marketing", value: 300, color: "#10b981" },
    { name: "Support", value: 300, color: "#f59e0b" },
    { name: "Development", value: 200, color: "#ef4444" },
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatMessages([...chatMessages, userMessage])
    setNewMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: chatMessages.length + 2,
        type: "bot" as const,
        message:
          "Thanks for your question! I'm processing your request and will provide you with the most relevant information shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="Emojot Logo" width={180} height={60} className="h-12 w-auto" />
        </div>
      </div>

      {/* Mobile/Tablet Controls */}
      {isMobile && (
        <div className="p-4 border-b border-gray-100 space-y-4">
          {/* User Info */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">LANKESHH@EMOJOT.COM</p>
              <p className="text-xs text-gray-500">COMPANY_ADMIN</p>
            </div>
          </div>

          {/* Emosight Button */}
          <Button
            onClick={() => setChatOpen(true)}
            className="w-full justify-start bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 hover:from-blue-800 hover:via-blue-600 hover:to-pink-400 text-white"
          >
            <div className="relative mr-2">
              <Sparkles className="h-4 w-4 animate-spin" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
            </div>
            Emosight AI
          </Button>

          {/* Account Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  {(() => {
                    const selectedAccountData = accounts.find((acc) => acc.id === selectedAccount)
                    const IconComponent = selectedAccountData?.icon
                    return IconComponent ? <IconComponent className="h-4 w-4" /> : null
                  })()}
                  <span>{accounts.find((acc) => acc.id === selectedAccount)?.name}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {accounts.map((account) => (
                <DropdownMenuItem
                  key={account.id}
                  onClick={() => setSelectedAccount(account.id)}
                  className="flex items-center gap-2"
                >
                  <account.icon className="h-4 w-4" />
                  <span>{account.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Logout Button */}
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
            onClick={() => {
              console.log("Logging out...")
              setMobileMenuOpen(false)
            }}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <NavItem
            icon={Briefcase}
            label="Sales"
            active={activeNav === "sales"}
            onClick={() => {
              setActiveNav("sales")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />

          {/* Collateral with Dropdown */}
          <div className="space-y-1">
            <NavItem
              icon={FileText}
              label="Collateral"
              active={activeNav === "collateral"}
              hasDropdown
              isExpanded={collateralExpanded}
              onClick={() => {
                setActiveNav("collateral")
                setCollateralExpanded(!collateralExpanded)
                if (isMobile && !collateralExpanded) setMobileMenuOpen(false)
              }}
            />

            {/* Collateral Sub-items with Branch UI */}
            {collateralExpanded && (
              <div className="ml-6 space-y-0 animate-in slide-in-from-top-2 duration-200">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>

                  {/* Case Studies */}
                  <div className="relative flex items-center">
                    <div className="absolute left-0 top-1/2 w-3 h-px bg-gray-300"></div>
                    <div className="ml-4">
                      <SubNavItem
                        icon={BookOpen}
                        label="Case Studies"
                        active={activeNav === "case-studies"}
                        onClick={() => {
                          setActiveNav("case-studies")
                          if (isMobile) setMobileMenuOpen(false)
                        }}
                      />
                    </div>
                  </div>

                  {/* Brochures */}
                  <div className="relative flex items-center">
                    <div className="absolute left-0 top-1/2 w-3 h-px bg-gray-300"></div>
                    <div className="ml-4">
                      <SubNavItem
                        icon={FileImage}
                        label="Brochures"
                        active={activeNav === "brochures"}
                        onClick={() => {
                          setActiveNav("brochures")
                          if (isMobile) setMobileMenuOpen(false)
                        }}
                      />
                    </div>
                  </div>

                  {/* Presentations */}
                  <div className="relative flex items-center">
                    <div className="absolute left-0 top-1/2 w-3 h-px bg-gray-300"></div>
                    <div className="ml-4">
                      <SubNavItem
                        icon={Presentation}
                        label="Presentations"
                        active={activeNav === "presentations"}
                        onClick={() => {
                          setActiveNav("presentations")
                          if (isMobile) setMobileMenuOpen(false)
                        }}
                      />
                    </div>
                  </div>

                  {/* Videos - Last item */}
                  <div className="relative flex items-center">
                    <div className="absolute left-0 top-1/2 w-3 h-px bg-gray-300"></div>
                    {/* Corner for last item */}
                    <div className="absolute left-0 top-1/2 bottom-0 w-px bg-white"></div>
                    <div className="ml-4">
                      <SubNavItem
                        icon={Video}
                        label="Videos"
                        active={activeNav === "videos"}
                        onClick={() => {
                          setActiveNav("videos")
                          if (isMobile) setMobileMenuOpen(false)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavItem
            icon={Building}
            label="Internal Management"
            active={activeNav === "internal"}
            onClick={() => {
              setActiveNav("internal")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={LayoutDashboard}
            label="Sales Portal"
            active={activeNav === "portal"}
            onClick={() => {
              setActiveNav("portal")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={Users}
            label="Account Management"
            active={activeNav === "account"}
            onClick={() => {
              setActiveNav("account")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={BarChart3}
            label="Branding & Marketing"
            active={activeNav === "branding"}
            onClick={() => {
              setActiveNav("branding")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={ShieldCheck}
            label="Platform Security"
            active={activeNav === "security"}
            onClick={() => {
              setActiveNav("security")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={Lock}
            label="Platform Compliance"
            active={activeNav === "compliance"}
            onClick={() => {
              setActiveNav("compliance")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={CheckCircle}
            label="Account Fulfillment"
            active={activeNav === "fulfillment"}
            onClick={() => {
              setActiveNav("fulfillment")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={BriefcaseIcon}
            label="HR/Admin/Insurance"
            active={activeNav === "hr"}
            onClick={() => {
              setActiveNav("hr")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={Wrench}
            label="Product Research"
            active={activeNav === "research"}
            onClick={() => {
              setActiveNav("research")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
          <NavItem
            icon={Settings}
            label="Product Management"
            active={activeNav === "product"}
            onClick={() => {
              setActiveNav("product")
              if (isMobile) setMobileMenuOpen(false)
            }}
          />
        </nav>
      </div>
    </>
  )

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Desktop Sidebar - Completely hidden when collapsed */}
        <div
          className={cn(
            "hidden lg:flex bg-white border-r border-gray-200 flex-col transition-all duration-300 overflow-hidden",
            sidebarCollapsed ? "w-0 opacity-0" : "w-64 opacity-100",
          )}
        >
          <SidebarContent />
        </div>

        {/* Mobile/Tablet Sidebar */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <SidebarContent isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6">
            {/* Top Section with Welcome and Controls */}
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              {/* Left Side - Hamburger + Welcome */}
              <div className="flex items-center gap-4">
                {/* Hamburger Menu Button */}
                <div className="flex items-center gap-2">
                  {/* Mobile/Tablet Hamburger */}
                  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                  </Sheet>

                  {/* Desktop Hamburger */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="hidden lg:flex"
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </div>

                {/* Welcome Message */}
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h1 className="text-xl lg:text-2xl text-gray-900 cursor-pointer">
                        <span className="font-normal">Welcome back, </span>
                        <span className="font-bold">Lankeshh</span>
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="start">
                      <div className="text-sm">
                        <p className="font-medium">LANKESHH@EMOJOT.COM</p>
                        <p className="text-gray-500">COMPANY_ADMIN</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                  <p className="text-gray-600 mt-1 text-sm lg:text-base">
                    Here's an overview of your portal activity and resources.
                  </p>
                </div>
              </div>

              {/* Desktop Controls - Hidden on Mobile/Tablet */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                {/* Emosight AI Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => setChatOpen(true)}
                      variant="outline"
                      size="icon"
                      className="hover:bg-gray-50 p-0 border-0"
                    >
                      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 p-2 rounded-full">
                        <div className="relative">
                          <Sparkles className="h-5 w-5 animate-spin text-white" />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
                        </div>
                      </div>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Chat with Emosight AI Assistant</p>
                  </TooltipContent>
                </Tooltip>

                {/* Account Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      {(() => {
                        const selectedAccountData = accounts.find((acc) => acc.id === selectedAccount)
                        const IconComponent = selectedAccountData?.icon
                        return IconComponent ? <IconComponent className="h-4 w-4" /> : null
                      })()}
                      <span>{accounts.find((acc) => acc.id === selectedAccount)?.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {accounts.map((account) => (
                      <DropdownMenuItem
                        key={account.id}
                        onClick={() => setSelectedAccount(account.id)}
                        className="flex items-center gap-2"
                      >
                        <account.icon className="h-4 w-4" />
                        <span>{account.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Logout Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  onClick={() => {
                    console.log("Logging out...")
                  }}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Dashboard Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Welcome Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Welcome to Emojot Portal</CardTitle>
                  <CardDescription>
                    Select a section from the sidebar to view your resources and manage your content.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                  <div className="w-16 lg:w-20 h-16 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 lg:w-10 h-8 lg:h-10 text-blue-600" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
                    <FileText className="w-4 h-4 mr-2" />
                    Browse Resources
                  </Button>
                </CardContent>
              </Card>

              {/* Activity Chart Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-0.5">
                    <CardTitle className="text-base lg:text-lg">Portal Activity</CardTitle>
                    <CardDescription>Monthly activity trends</CardDescription>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] lg:h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={lineChartData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <RechartsTooltip />
                        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Resource Distribution Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-0.5">
                    <CardTitle className="text-base lg:text-lg">Resource Distribution</CardTitle>
                    <CardDescription>Breakdown by department</CardDescription>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] lg:h-[200px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={70}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Weekly Usage Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-0.5">
                    <CardTitle className="text-base lg:text-lg">Weekly Usage</CardTitle>
                    <CardDescription>Resource access by day</CardDescription>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="h-[180px] lg:h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <RechartsTooltip />
                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 px-4 lg:px-6 py-4">
            <p className="text-sm text-gray-500 text-right">Copyright © Emojot Inc</p>
          </footer>
        </div>

        {/* Emosight Chat Interface */}
        {chatOpen && (
          <div
            className={cn(
              "fixed bottom-16 right-4 w-96 bg-white rounded-lg shadow-2xl drop-shadow-2xl border border-gray-200 z-50 transition-all duration-300",
              chatMinimized ? "h-14" : "h-[520px]",
            )}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="h-5 w-5 animate-spin" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full opacity-30 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold">Emosight AI</h3>
                  <p className="text-xs opacity-90">Your intelligent assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                  onClick={() => setChatMinimized(!chatMinimized)}
                >
                  <Minimize2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-white hover:bg-white/20"
                  onClick={() => setChatOpen(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {!chatMinimized && (
              <>
                {/* Chat Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[400px]">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex gap-3", message.type === "user" ? "justify-end" : "justify-start")}
                    >
                      {message.type === "bot" && (
                        <Avatar className="w-8 h-8 bg-gradient-to-r from-blue-900 to-pink-500">
                          <AvatarFallback className="bg-gradient-to-r from-blue-900 to-pink-500 text-white text-xs">
                            <Sparkles className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3 text-sm",
                          message.type === "user"
                            ? "bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 text-white"
                            : "bg-gray-100 text-gray-900",
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.message}</p>
                        <p className={cn("text-xs mt-1", message.type === "user" ? "text-blue-100" : "text-gray-500")}>
                          {message.timestamp}
                        </p>
                      </div>
                      {message.type === "user" && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 pb-6 border-t border-gray-200 bg-white rounded-b-lg">
                  <div className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Ask Emosight anything..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 hover:from-blue-800 hover:via-blue-600 hover:to-pink-400"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

function SubNavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: any
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 text-sm relative",
        active
          ? "bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 text-white shadow-lg"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
      )}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  hasDropdown = false,
  isExpanded = false,
  onClick,
}: {
  icon: any
  label: string
  active?: boolean
  hasDropdown?: boolean
  isExpanded?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
        active
          ? "bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 text-white shadow-lg"
          : "text-gray-600 hover:bg-gray-50",
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium flex-1">{label}</span>
      {hasDropdown && (
        <div className={cn("transition-transform duration-200", isExpanded ? "rotate-90" : "")}>
          <ChevronRight className="h-4 w-4" />
        </div>
      )}
    </button>
  )
}
