"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Package,
  Truck,
  Map,
  FileText,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  User,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function TruckerDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background Map */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d1d5db' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/95 backdrop-blur-sm border-r border-gray-200">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Trucker</h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="p-4">
            <nav className="space-y-2">
              <NavItem
                icon={LayoutDashboard}
                label="Dashboard"
                active={activeNav === "dashboard"}
                onClick={() => setActiveNav("dashboard")}
              />
              <NavItem
                icon={Package}
                label="Orders"
                active={activeNav === "orders"}
                onClick={() => setActiveNav("orders")}
              />
              <NavItem
                icon={Truck}
                label="Shipments"
                active={activeNav === "shipments"}
                onClick={() => setActiveNav("shipments")}
              />
              <NavItem
                icon={Map}
                label="Map Overview"
                active={activeNav === "map"}
                onClick={() => setActiveNav("map")}
              />
              <NavItem
                icon={FileText}
                label="Documents"
                active={activeNav === "documents"}
                onClick={() => setActiveNav("documents")}
              />
              <NavItem
                icon={BarChart3}
                label="Statistics"
                active={activeNav === "statistics"}
                onClick={() => setActiveNav("statistics")}
              />
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            <NavItem icon={User} label="Wilson Kenter" />
            <NavItem icon={HelpCircle} label="Help" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Welcome back, <span className="text-gray-900">Wilson</span>
                </h1>
                <p className="text-gray-600">You have 3 delivered packages</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Packages delivered</span>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-2xl font-bold">127</span>
                  </div>
                </div>
                <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  NEW
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-4 space-y-6">
              {/* All Orders Card */}
              <Card className="bg-gray-900 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">All orders</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">127</span>
                      <span className="text-green-400 text-sm flex items-center">
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        4.6%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Active Shipments */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Active shipments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">32</span>
                      <span className="text-red-500 text-sm flex items-center">
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                        1.3%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Numbers */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Order number</CardTitle>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <OrderItem id="VCNPTL4097451" category="Electronics" status="success" />
                  <OrderItem id="PTSLM8398661" category="Hobby" status="active" highlighted />
                  <OrderItem id="RSBPTL3418976" category="Toys" status="success" />
                  <OrderItem id="RKYVCMR227154" category="Stationary" status="warning" />
                  <OrderItem id="HCRPTL5119826" category="Books" status="success" />
                  <OrderItem id="RMCPNV433191" category="Electronics" status="warning" />
                  <OrderItem id="VCRSLM5616189" category="Books" status="error" />
                  <OrderItem id="RKYVCMR351244" category="Stationary" status="success" />
                  <OrderItem id="WCNPTL7422257" category="Toys" status="success" />
                  <OrderItem id="RKYVCR6412531" category="re-inventory" status="success" />
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="col-span-8 space-y-6">
              {/* Order Details */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Order details</CardTitle>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <DroneCard />
                    <DroneCard />
                    <DroneCard />
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Item</span>
                      <p className="font-medium">PTSLM8398661</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Type of content</span>
                      <p className="font-medium">Hobby</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Weight</span>
                      <p className="font-medium">460.4g</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Status</span>
                      <p className="font-medium">$400</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Shipment Details */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Shipment details</CardTitle>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">From</span>
                        <span className="text-gray-500">Status</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Vancouver, WA 98684</span>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">In Transit</Badge>
                      </div>
                      <div className="pt-2">
                        <span className="text-gray-500">To</span>
                        <p className="font-medium">Hubbard, OR 97032</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Tracking</CardTitle>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <TrackingItem
                        status="Departed waypoint"
                        location="24 July 2022, 8:05 PM / 25333 SW Town Center Loop E, Wilsonville, OR 97070"
                      />
                      <TrackingItem
                        status="Arrived at the waypoint"
                        location="24 July 2022, 7:45 PM / 25333 SW Town Center Loop E, Wilsonville, OR 97070"
                      />
                      <TrackingItem
                        status="Departed waypoint"
                        location="24 July 2022, 5:21 PM / 1800 SE Bond Ave, Portland, OR 97266"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
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
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
        active ? "bg-green-500 text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

function OrderItem({
  id,
  category,
  status,
  highlighted = false,
}: {
  id: string
  category: string
  status: "success" | "warning" | "error" | "active"
  highlighted?: boolean
}) {
  const statusColors = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    active: "bg-green-500",
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-colors",
        highlighted ? "bg-gray-900 text-white" : "hover:bg-gray-50",
      )}
    >
      <div className={cn("w-2 h-2 rounded-full", statusColors[status])} />
      <div className="flex-1 min-w-0">
        <p className={cn("font-medium", highlighted ? "text-white" : "text-gray-900")}>{id}</p>
        <p className={cn("text-sm", highlighted ? "text-gray-300" : "text-gray-500")}>{category}</p>
      </div>
      {highlighted && <MoreHorizontal className="w-4 h-4 text-gray-300" />}
    </div>
  )
}

function DroneCard() {
  return (
    <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
      </div>
    </div>
  )
}

function TrackingItem({ status, location }: { status: string; location: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 text-sm">{status}</p>
        <p className="text-xs text-gray-500 mt-1">{location}</p>
      </div>
    </div>
  )
}
