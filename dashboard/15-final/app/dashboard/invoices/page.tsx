import InvoicesTable from '@/app/ui/invoices/table';

export default function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
  };
}) {
  return (
    <div>
      <InvoicesTable searchParams={searchParams} />
    </div>
  );
}
