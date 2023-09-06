import { customers, invoices } from "@/app/lib/dummy-data";
import Image from "next/image";

export default function CustomersTable() {
  function totalInvoices(customerId: number) {
    const customerInvoices = invoices.filter((invoice) => {
      return invoice.customerId === customerId
    });
    return customerInvoices.length;
  };
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-base font-semibold">Customers</h1>
      </div>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50 text-left text-sm">
                <tr>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Profile</span>
                  </th>
                  <th scope="col" className="px-3.5 py-3.5  sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold">
                    Total Invoices
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-gray-500">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                        <div className="flex w-7 flex-none items-center">
                          <img
                            src={customer.imageUrl}
                            alt={customer.name}
                            className="h-7 w-full flex-none rounded-full"
                          />
                        </div>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                      {customer.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {customer.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {totalInvoices(customer.id)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
