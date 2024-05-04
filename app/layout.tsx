import { useClient } from 'next/amp';
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
  children,
  navigation,
  mailProps,
}: RootLayoutProps)  {
  const client = useClient();

  if (!client) {
    return null; // Render nothing on the server
  }
  
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
              <AccountSwitcher isCollapsed={false} accounts={accounts} />
            </div>
            
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "Dashboard",
                  label: "128",
                  icon: Home,
                  variant: "default",
                  href: "/Dashboard", // Specify the route for the Dashboard page
                },
                {
                  title: "Mail",
                  label: "9",
                  icon: Inbox,
                  variant: "ghost",
                  href: "/Mail", // Specify the route for the Drafts page
                },
                {
                  title: "Account",
                  label: "",
                  icon: User,
                  variant: "ghost",
                  href: "/Account",
                },
                {
                  title: "Junk",
                  label: "23",
                  icon: ArchiveX,
                  variant: "ghost",
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
                  label: "972",
                  icon: Users2,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Updates",
                  label: "342",
                  icon: AlertCircle,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Forums",
                  label: "128",
                  icon: MessagesSquare,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Shopping",
                  label: "8",
                  icon: ShoppingCart,
                  variant: "ghost",
                  href: ""
                },
                {
                  title: "Promotions",
                  label: "21",
                  icon: Archive,
                  variant: "ghost",
                  href: ""
                },
              ]}
            />
            
          </ResizablePanel>
  
  {/* Resizable Handle */}
  <ResizableHandle withHandle />
  
  {/* Children Panel */}
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

