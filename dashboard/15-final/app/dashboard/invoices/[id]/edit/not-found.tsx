import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-12 text-gray-400" />
      <h2 className="text-lg font-semibold">Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <button className="mt-4 rounded-md bg-black px-4 py-2 text-sm text-white">
        <Link href="/dashboard/invoices">Go Back</Link>
      </button>
    </main>
  );
}
