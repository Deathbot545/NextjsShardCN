import Image from "next/image";
import { cookies } from "next/headers"
import { Mail } from "@/components//mail/mail";
import { accounts, mails } from "@/components/mail/mail-data";
import TeamSwitcher from "@/components/dashboard/team-switcher";
import { MainNav } from "@/components/dashboard/main-nav";
import { Search } from "@/components/dashboard/search";
import { UserNav } from "@/components/dashboard/user-nav";
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recent-sales";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div> */}
      {/* <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id neque auctor, vulputate massa eget, ornare dolor. Ut ac urna at tellus iaculis molestie non id nulla. Proin mattis massa tellus, sit amet efficitur eros tincidunt a. In dictum feugiat fermentum. Nulla dignissim nulla ut metus suscipit vestibulum. Nulla sit amet volutpat erat, eget pretium eros. Praesent in mattis lacus. Etiam consectetur aliquet nisi in convallis. Praesent mollis non nisl sed sodales. Mauris sodales vel urna id commodo. Curabitur ut nisi leo.

Sed eget enim a velit gravida congue quis id nibh. Donec efficitur tincidunt convallis. Fusce non varius mauris. Mauris tempus blandit lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ligula odio, luctus vel risus suscipit, semper ultrices sapien. Cras finibus eros leo, sed semper felis porta ac.

Cras faucibus vulputate sapien, vel iaculis velit porttitor a. Praesent arcu metus, sodales vitae felis non, interdum placerat enim. Nulla facilisi. Suspendisse mattis sed dui non malesuada. Pellentesque ac condimentum ante. Sed dignissim, augue iaculis maximus consectetur, neque ipsum euismod neque, nec fermentum ipsum tellus sed ex. Maecenas eget fringilla tellus. Donec nec erat congue, accumsan eros sed, euismod diam. Ut euismod purus eu malesuada tincidunt. Ut magna sem, semper ac sagittis vitae, tempus a mauris.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium facilisis ex, vitae rutrum tortor placerat sed. Ut tempor dolor tellus, ac sodales nibh finibus a. Nulla quis pharetra magna, ac faucibus odio. Quisque varius libero libero, a suscipit velit ultricies vehicula. Suspendisse sodales dui non dolor posuere dignissim. Duis porttitor diam eget purus tincidunt, at placerat augue cursus. Donec ut sodales eros.

Praesent varius elementum ligula sed ultricies. Praesent fringilla faucibus justo, sit amet consequat tortor tincidunt ultricies. Sed ultricies justo non velit porttitor euismod. Sed dictum, nunc at vulputate bibendum, nibh augue vestibulum metus, ac consectetur purus arcu non nibh. Morbi interdum, lectus nec fermentum tincidunt, magna tellus feugiat mauris, non tristique justo lectus a lorem. Quisque in augue vel diam rutrum sollicitudin consequat nec diam. Vestibulum id diam et ante congue aliquam. Maecenas nunc ex, vestibulum vitae pulvinar id, porta nec nisi. Sed efficitur et augue nec lacinia. Pellentesque dignissim blandit imperdiet. Donec vulputate sapien metus, quis
      </p> */}
       <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
