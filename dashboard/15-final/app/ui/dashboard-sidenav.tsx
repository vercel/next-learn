'use client';

import { UserGroupIcon, HomeIcon, InboxIcon, PowerIcon } from '@heroicons/react/24/outline';
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
		<div className="flex flex-col p-1 md:p-4 w-12 md:w-64 border-r h-full">
			<Link href="/">
				<Image priority src="/logo.svg" height={80} width={80} alt="Logo" className="mb-4 md:mb-6" />
			</Link>
			{tabs.map((tab, i) => {
				const TabIcon = tab.icon;
				return (
					<Link
						key={i}
						href={tab.href}
						className={`mb-2 ${
							pathname === tab.href ? 'bg-gray-100 text-blue-600' : ' text-gray-600'
						} hover:text-blue-600 hover:bg-gray-100 flex rounded p-2 text-sm font-semibold`}
					>
						<TabIcon className="h-5 w-5 md:mr-2" />
						<div className="hidden md:block">{tab.name}</div>
					</Link>
				);
			})}
			<Link
				href="/login"
				className="flex mt-auto hover:text-blue-600 rounded p-2 text-sm font-semibold"
			>
				<PowerIcon className="h-5 w-5 md:mr-2" />
				<div className="hidden md:block">Sign Out</div>
			</Link>
		</div>
	);
}
