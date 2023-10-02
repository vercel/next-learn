import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import LogOutButton from './log-out-button';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col border-r px-2 py-4">
      <Link
        className="flex h-20 items-end rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <Image
          src="/acme-logo.svg"
          alt="The Next.js Symbol, a white N inside a black circle"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <LogOutButton />
      </div>
    </div>
  );
}
