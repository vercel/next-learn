import TopNav from "@/app/ui/dashboard/topnav";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-14 md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto">
        <TopNav />
        <div className="p-4 sm:p-10 md:p-20">{children}</div>
      </div>
    </div>
  );
}
