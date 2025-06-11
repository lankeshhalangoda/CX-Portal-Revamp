"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Phone,
  Users,
  LayoutDashboard,
  FileText,
  Settings,
  Search,
  MoreHorizontal,
  Send,
  Paperclip,
  Smile,
  BookOpen,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function ChattyDashboard() {
  const [activeChat, setActiveChat] = useState("hatypo-studio")
  const [activeNav, setActiveNav] = useState("messages")

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-blue-600">Emojot</h1>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <NavItem
              icon={BookOpen}
              label="Stories"
              active={activeNav === "stories"}
              onClick={() => setActiveNav("stories")}
            />
            <NavItem
              icon={MessageSquare}
              label="Messages"
              active={activeNav === "messages"}
              onClick={() => setActiveNav("messages")}
            />
            <NavItem icon={Phone} label="Call" active={activeNav === "call"} onClick={() => setActiveNav("call")} />
            <NavItem
              icon={Users}
              label="Community"
              active={activeNav === "community"}
              onClick={() => setActiveNav("community")}
            />
            <NavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={activeNav === "dashboard"}
              onClick={() => setActiveNav("dashboard")}
            />
            <NavItem
              icon={FileText}
              label="Files"
              active={activeNav === "files"}
              onClick={() => setActiveNav("files")}
            />
            <NavItem
              icon={Settings}
              label="Settings"
              active={activeNav === "settings"}
              onClick={() => setActiveNav("settings")}
            />
          </nav>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-blue-100 text-blue-600">FZ</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Fazaaa</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-50 border-0 focus-visible:ring-1 focus-visible:ring-blue-500"
            />
          </div>
        </div>

        {/* Pinned Messages */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Pinned Message</span>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto">
          <MessageItem
            active={activeChat === "hatypo-studio"}
            onClick={() => setActiveChat("hatypo-studio")}
            avatar="HS"
            name="Hatypo Studio"
            message="Mas Aditt Typing..."
            time="09:36 PM"
            unread={true}
            avatarColor="bg-blue-500"
          />
          <MessageItem
            active={activeChat === "hatypo-studio-2"}
            onClick={() => setActiveChat("hatypo-studio-2")}
            avatar="HS"
            name="Hatypo Studio"
            message="Mas Hatypo Typing..."
            time="09:31 PM"
            unread={true}
            avatarColor="bg-orange-500"
          />
          <MessageItem
            active={activeChat === "nalaaa"}
            onClick={() => setActiveChat("nalaaa")}
            avatar="N"
            name="Nalaaa"
            message="pppppppppppppppppppp"
            time="09:12 PM"
            unread={true}
            avatarColor="bg-blue-600"
          />
          <MessageItem
            active={activeChat === "omoc"}
            onClick={() => setActiveChat("omoc")}
            avatar="O"
            name="OMOC Project"
            message="Aditt Typing..."
            time="09:11 PM"
            unread={true}
            avatarColor="bg-gray-900"
          />
          <MessageItem
            active={activeChat === "momon"}
            onClick={() => setActiveChat("momon")}
            avatar="M"
            name="Momon"
            message="Typing..."
            time="09:40 PM"
            avatarColor="bg-blue-500"
          />
          <MessageItem
            active={activeChat === "farhan"}
            onClick={() => setActiveChat("farhan")}
            avatar="F"
            name="Farhan"
            message="Cek Figma coba han"
            time="09:25 PM"
            avatarColor="bg-blue-600"
          />
          <MessageItem
            active={activeChat === "mas-aditt"}
            onClick={() => setActiveChat("mas-aditt")}
            avatar="MA"
            name="Mas Aditt"
            message="Typing..."
            time="09:21 AM"
            avatarColor="bg-blue-500"
          />
          <MessageItem
            active={activeChat === "zhafran"}
            onClick={() => setActiveChat("zhafran")}
            avatar="Z"
            name="Zhafran"
            message="Yaudah joo"
            time="Yesterday"
            avatarColor="bg-blue-600"
          />
          <MessageItem
            active={activeChat === "vitoo"}
            onClick={() => setActiveChat("vitoo")}
            avatar="V"
            name="Vitoo"
            message="Pie to joemru?"
            time="Yesterday"
            avatarColor="bg-blue-500"
          />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">HS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">Hatypo Studio</h3>
              <p className="text-sm text-gray-500">Mas Aditt Typing...</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Date Header */}
            <div className="text-center">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today, April 11</span>
            </div>

            {/* Message from Roulii */}
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-500 text-white text-xs">R</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">Roulii</span>
                  <span className="text-xs text-gray-500">09:18 AM</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-md">
                  <p className="text-sm text-gray-900">Guyses cek Figmaku dong, minta feedbacknyaa</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    #Momon
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #Fazaa
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #Farhan
                  </Badge>
                </div>
              </div>
            </div>

            {/* User's message */}
            <div className="flex justify-end">
              <div className="flex items-end gap-2">
                <span className="text-xs text-gray-500">09:19 AM</span>
                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md p-3 max-w-md">
                  <p className="text-sm">Oke!!! Bangettt!</p>
                </div>
                <span className="text-xs text-gray-500">You</span>
              </div>
            </div>

            {/* Message from Farhan */}
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-xs">F</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">Farhan</span>
                  <span className="text-xs text-gray-500">09:20 AM</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-md">
                  <div className="bg-gray-800 text-white p-4 rounded-lg mb-2">
                    <div className="text-center">
                      <div className="text-sm font-medium">Visual Identity</div>
                      <div className="text-xs opacity-75">Guidelines</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-900">Ada yang typo nih</p>
                </div>
              </div>
            </div>

            {/* Message from Momon */}
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-500 text-white text-xs">M</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">Momon</span>
                  <span className="text-xs text-gray-500">09:21 AM</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-md">
                  <p className="text-sm text-gray-900">Gas LLLLLL!</p>
                </div>
              </div>
            </div>

            {/* Message from Nalaaa */}
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-xs">N</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">Nalaaa</span>
                  <span className="text-xs text-gray-500">09:25 AM</span>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-md p-3 max-w-md">
                  <p className="text-sm text-gray-900">Like aku guyses hehe</p>
                  <a href="#" className="text-blue-500 text-sm underline">
                    https://www.instagram.com/p/CqzAdo...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                className="pr-20 py-3 rounded-full border-gray-200 focus-visible:ring-1 focus-visible:ring-blue-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="icon" className="rounded-full bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
        active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

function MessageItem({
  active,
  onClick,
  avatar,
  name,
  message,
  time,
  unread,
  avatarColor,
}: {
  active: boolean
  onClick: () => void
  avatar: string
  name: string
  message: string
  time: string
  unread?: boolean
  avatarColor: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors",
        active && "bg-blue-50 border-r-2 border-blue-500",
      )}
    >
      <div className="relative">
        <Avatar>
          <AvatarFallback className={cn("text-white text-sm", avatarColor)}>{avatar}</AvatarFallback>
        </Avatar>
        {unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{message}</p>
      </div>
    </button>
  )
}
