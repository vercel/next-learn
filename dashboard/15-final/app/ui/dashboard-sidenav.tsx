'use client';

import { UserGroupIcon, HomeIcon, InboxIcon, CogIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

export default function SideNav() {
	const pathname = usePathname();

	const tabs = [
		{ name: 'Home', href: '/dashboard', icon: HomeIcon },
		{ name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
		{ name: 'Invoices', href: '/dashboard/invoices', icon: InboxIcon }
	];

	return (
		<div className="flex flex-col p-4 w-10 md:w-64 border-r  h-full">
			<Link href="/">
				<Image priority src="/logo.svg" height={80} width={80} alt="Logo" className="mb-6" />
			</Link>
			{tabs.map((tab, i) => {
				const TabIcon = tab.icon;
				return (
					<Link
						key={i}
						href={tab.href}
						className={`mb-2 ${
							pathname === tab.href ? 'bg-gray-100 text-indigo-600' : ' text-gray-600'
						} hover:text-indigo-600 hover:bg-gray-100 flex rounded p-2 text-sm font-semibold`}
					>
						<TabIcon className="h-5 w-5 mr-2" />
						<div>{tab.name}</div>
					</Link>
				);
			})}
			<Link
				href="/settings"
				className="flex mt-auto hover:text-indigo-600 hover:bg-gray-100 rounded p-2 text-sm font-semibold"
			>
				<CogIcon className="h-5 w-5 mr-2" />
				<div>Settings</div>
			</Link>
		</div>
	);
}
