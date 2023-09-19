import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
export default function EditInvoice({ id }: { id: number }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-1"
    >
      <PencilSquareIcon className="w-4" />
    </Link>
  );
}
