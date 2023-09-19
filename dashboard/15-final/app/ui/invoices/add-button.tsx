import Link from 'next/link';
export default function AddInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Add Invoice
    </Link>
  );
}
