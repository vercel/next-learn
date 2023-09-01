import TopNav from "@/app/ui/dashboard-topnav";
import SideNav from "../ui/dashboard-sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/12 md:w-1/4 lg:w-1/5">
        <SideNav />
      </div>
      <div className="w-11/12 md:w-3/4 lg:w-4/5">
        <TopNav />
        <div className="p-4 sm:p-10 md:p-20">{children}</div>
      </div>
    </div>
  );
}