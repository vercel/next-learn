import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import LogOutButton from './log-out-button';
import AcmeLogo from '../acme-logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col border-r px-2 py-4">
      <Link
        className="mb-2 flex h-20 items-end justify-center rounded-md bg-blue-500 p-4 md:h-40 md:justify-start"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <LogOutButton />
      </div>
    </div>
  );
}
