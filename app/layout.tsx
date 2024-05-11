

import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Nav } from "@/components/dashboard/nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users,
  Users2,
  Home,
  User,

} from "lucide-react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Mail, accounts } from "@/components/mail/mail-data";
import { AccountSwitcher } from "@/components/account-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

interface RootLayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
  mailProps: MailProps; // Include mailProps
}

export default function RootLayout({
  children
}: RootLayoutProps)  {
  
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

<ResizablePanelGroup
  direction="horizontal"
  className="h-full max-h-[800px] items-stretch"
>
  {/* Navigation Panel */}
  <ResizablePanel defaultSize={25} className="min-w-[50px] transition-all duration-300 ease-in-out">
    
    <div className="flex h-[52px] items-center justify-center">
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
            
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "Dashboard",
                  label: "",
                  icon: Home,
                  variant: "default",
                  href: "/Dashboard", 
                },
                {
                  title: "Mail",
                  label: "",
                  icon: Inbox,
                  variant: "default",
                  href: "/Mail", 
                },
                {
                  title: "Account",
                  label: "",
                  icon: User,
                  variant: "default",
                  href: "/Account",
                },
                {
                  title: "Junk",
                  label: "",
                  icon: ArchiveX,
                  variant: "default",
                  href: "/Dash"
                },
                {
                  title: "Trash",
                  label: "",
                  icon: Trash2,
                  variant: "ghost",
                  href: "/dummy"
                },
                {
                  title: "Archive",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                  href: ""
                },
              ]}
            />
            
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "Social",
                  label: "",
                  icon: Users2,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Updates",
                  label: "",
                  icon: AlertCircle,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Forums",
                  label: "",
                  icon: MessagesSquare,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Shopping",
                  label: "",
                  icon: ShoppingCart,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Promotions",
                  label: "",
                  icon: Archive,
                  variant: "ghost",
                  href: ""
                },
              ]}
            />
            
          </ResizablePanel>
  <ResizableHandle withHandle />
  
  <ResizablePanel defaultSize={100}>
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full">{children}</div>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>

           
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

