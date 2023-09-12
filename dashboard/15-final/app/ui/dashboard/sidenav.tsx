import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
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
        <NavLinks />
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
