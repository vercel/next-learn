import InvoiceForm from "@/app/ui/invoices/form";
import { invoices } from "@/app/lib/dummy-data";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id ? parseInt(params.id) : null;
  const invoice = invoices.find((invoice) => invoice.id === id);

  if (!invoice) {
    notFound();
  }

  return (
    <div>
      <InvoiceForm type="edit" invoice={invoice} />
    </div>
  );
}
