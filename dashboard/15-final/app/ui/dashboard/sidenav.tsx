import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import LogOutButton from './log-out-button';

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
      <LogOutButton />
    </div>
  );
}
