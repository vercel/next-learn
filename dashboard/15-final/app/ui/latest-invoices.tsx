// InvoiceList.tsx
import { Customer, Invoice } from "@/app/lib/definitions";
import { findLatestInvoices } from "@/app/lib/calculations";

export default function LatestInvoices({
  invoices,
  customers,
}: {
  invoices: Invoice[];
  customers: Customer[];
}) {
  const lastFiveInvoices = findLatestInvoices(invoices);

  return (
    <div className="rounded-xl border p-6 shadow-sm md:col-span-3">
      <h2 className="font-semibold">Latest Invoices</h2>

      {lastFiveInvoices.map((invoice) => {
        const customer = customers.find(
          (customer) => customer.id === invoice.customerId,
        );
        return (
          <div
            key={invoice.id}
            className="mt-8 flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={customer?.imageUrl || ""}
                alt={customer?.name || ""}
                className="mr-4 h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{customer?.name}</p>
                <p className="text-sm text-gray-500">{customer?.email}</p>
              </div>
            </div>
            <p className="text-lg font-medium">+ ${invoice.amount / 100}</p>
          </div>
        );
      })}
    </div>
  );
}
