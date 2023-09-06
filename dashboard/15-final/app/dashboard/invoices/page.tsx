import InvoicesTable from "@/app/ui/invoices/table";

export default function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
    page: string;
  };
}) {
  return (
    <div>
      <InvoicesTable searchParams={searchParams} />
    </div>
  );
}
