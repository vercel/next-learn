import Card from "@/app/ui/card";
// TO DO: Replace with real data in Chapter 7
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="flex flex-col gap-6 sm:flex-row">
        <RevenueChart data={revenue} />
        {/* <LatestInvoices /> */}
      </div>
    </div>
  );
}
