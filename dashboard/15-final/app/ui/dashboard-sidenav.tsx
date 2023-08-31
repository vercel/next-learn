"use client";

import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Image from "next/image";

export default function SideNav() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
    { name: "Invoices", href: "/dashboard/invoices", icon: InboxIcon },
  ];

  return (
    <div className="flex h-full w-12 flex-col border-r p-1 md:w-72 md:p-4">
      <Link href="/">
        <Image
          priority
          src="/logo.svg"
          height={100}
          width={100}
          alt="Logo"
          className="mb-6 mt-4"
        />
      </Link>
      {tabs.map((tab, i) => {
        const TabIcon = tab.icon;
        return (
          <Link
            key={i}
            href={tab.href}
            className={clsx(
              "mb-2 flex rounded p-2 font-semibold hover:bg-gray-100 hover:text-blue-600",
              {
                "bg-gray-100 text-blue-600": pathname === tab.href,
              },
            )}
          >
            <TabIcon className="h-6 w-6 md:mr-2" />
            <div className="hidden md:block">{tab.name}</div>
          </Link>
        );
      })}
      <Link
        href="/login"
        className="mt-auto flex rounded p-2 font-semibold hover:text-blue-600"
      >
        <PowerIcon className="h-6 w-6 md:mr-2" />
        <div className="hidden md:block">Sign Out</div>
      </Link>
    </div>
  );
}
