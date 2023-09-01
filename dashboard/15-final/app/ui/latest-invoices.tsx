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
    <div className="w-full rounded-xl border p-6 shadow-sm md:col-span-4 lg:col-span-3">
      <h2 className="font-semibold">Latest Invoices</h2>

      {lastFiveInvoices.map((invoice) => {
        const customer = customers.find(
          (customer) => customer.id === invoice.customerId,
        );
        return (
          <div
            key={invoice.id}
            className="mt-8 flex  flex-row items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={customer?.imageUrl || ""}
                alt={customer?.name || ""}
                className="mr-4 h-8 w-8 rounded-full"
              />
              <div className="min-w-0">
                <p className="truncate font-semibold">{customer?.name}</p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  {customer?.email}
                </p>
              </div>
            </div>
            <p className="truncate font-medium sm:text-lg">
              +{" "}
              {(invoice.amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
