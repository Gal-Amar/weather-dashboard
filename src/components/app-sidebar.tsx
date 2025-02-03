import { Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
]

export function AppSidebar() {
  return (
      <Sidebar >
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Welcome to Weather Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="pt-1">
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
  )
}