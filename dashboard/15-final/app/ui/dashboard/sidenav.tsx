'use client';

import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SideNav() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: InboxIcon },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  ];

  return (
    <div className="flex h-full flex-col justify-between border-r px-2 py-4">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="mb-4 ml-1"
            width={32}
            height={32}
          />
        </Link>
        {tabs.map((tab, i) => {
          const TabIcon = tab.icon;
          return (
            <Link
              key={i}
              href={tab.href}
              className={clsx(
                'mt-2 flex gap-2 rounded-md p-2 font-semibold hover:bg-gray-50 hover:text-blue-600',
                {
                  'bg-gray-50 text-blue-600': pathname === tab.href,
                },
              )}
            >
              <TabIcon className="w-6" />
              <p className="hidden md:block">{tab.name}</p>
            </Link>
          );
        })}
      </div>
      <Link
        href="/login"
        className="flex gap-2 rounded p-2 font-semibold hover:text-blue-600"
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </Link>
    </div>
  );
}
