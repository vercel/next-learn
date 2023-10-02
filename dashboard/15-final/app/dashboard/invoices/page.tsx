import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/invoices/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Table from '@/app/ui/invoices/table';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams:
    | {
        query: string | undefined;
        page: string | undefined;
      }
    | undefined;
}) {
  const query = searchParams?.query || '';
  const currentPage = query ? 1 : Number(searchParams?.page || '1');

  const { invoices, totalPages } = await fetchFilteredInvoices(
    query,
    currentPage,
  );

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Invoices</h1>
        <CreateInvoice />
      </div>
      <div className="mt-8 flex items-center justify-between gap-2">
        <Search />
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
      <Table invoices={invoices} />
    </div>
  );
}
