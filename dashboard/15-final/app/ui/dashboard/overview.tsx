import Card from "@/app/ui/card";
import { invoices, customers, revenue } from "@/app/lib/dummy-data";
import { calculateInvoices } from "@/app/lib/calculations";
import RevenueChart from "@/app/ui/revenue-chart";
import LatestInvoices from "@/app/ui/latest-invoices";

export default function DashboardOverview() {
  const totalPaidInvoices = calculateInvoices(invoices, "paid");
  const totalPendingInvoices = calculateInvoices(invoices, "pending");
  const numberOfInvoices = invoices.length;
  const numberOfCustomers = customers.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices invoices={invoices} customers={customers} />
      </div>
    </>
  );
}
