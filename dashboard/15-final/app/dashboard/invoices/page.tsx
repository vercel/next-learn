import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/invoices/search';
import AddInvoiceButton from '@/app/ui/invoices/add-button';
import Table from '@/app/ui/invoices/table';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
  };
}) {
  let searchTerm = searchParams.query ?? '';
  let currentPage = 1;
  const ITEMS_PER_PAGE = 10;

  const { invoices, count } = await fetchFilteredInvoices(
    searchTerm,
    currentPage,
    ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Invoices</h1>
        <AddInvoiceButton />
      </div>
      <div className="mt-8 flex items-center justify-between gap-2">
        <Search />
        {/* <Pagination /> */}
      </div>
      <Table invoices={invoices} />
    </div>
  );
}
