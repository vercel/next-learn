import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/invoices/search';
import AddInvoiceButton from '@/app/ui/invoices/add-button';
import Table from '@/app/ui/invoices/table';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function Page() {
  const ITEMS_PER_PAGE = 10;
  const searchTerm = '';
  let currentPage = 1;

  const { invoices, count } = await fetchFilteredInvoices(
    searchTerm,
    currentPage,
    ITEMS_PER_PAGE,
  );

  // const searchTerm = searchParams.query ?? '';
  // let currentPage = 1;
  // if (!searchTerm) {
  //   currentPage = parseInt(searchParams.page ?? '1');
  // }

  // const totalCount = await fetchInvoiceCountBySearchTerm(searchTerm);
  // const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Invoices</h1>
        <AddInvoiceButton />
      </div>
      <div className="mt-8 flex items-center justify-between gap-2">
        {/* <Search searchParams={searchParams} />
        <Pagination
          searchParams={searchParams}
          totalPages={totalPages}
          currentPage={currentPage}
        /> */}
      </div>
      <Table invoices={invoices} />
    </div>
  );
}
