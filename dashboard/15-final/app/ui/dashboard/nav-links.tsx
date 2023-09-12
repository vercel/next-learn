'use client';

import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const tabs = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: InboxIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {tabs.map((tab, i) => {
        const TabIcon = tab.icon;
        return (
          <a
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
          </a>
        );
      })}
    </>
  );
}
