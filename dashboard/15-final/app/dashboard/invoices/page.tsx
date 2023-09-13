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
    <main>
      <InvoicesTable searchParams={searchParams} />
    </main>
  );
}
