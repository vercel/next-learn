import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice() {
  return (
    <button className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      <Link href="/dashboard/invoices/create">Create Invoice</Link>
    </button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <button className="rounded-md border p-1">
      <Link href={`/dashboard/invoices/${id}/edit`}>
        <PencilSquareIcon className="w-4" />
      </Link>
    </button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <form action={deleteInvoice}>
      <input type="hidden" name="id" value={id} />
      <button className="rounded-md border p-1">
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
