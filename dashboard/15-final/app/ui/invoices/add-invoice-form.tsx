"use client";
import { Invoice } from "@/app/lib/definitions";
import { customers } from "@/app/lib/dummy-data";
import { useState, FormEvent } from "react";

export default function AddInvoiceForm() {
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedCustomer && amount) {
      const newInvoice: Invoice = {
        customerId: selectedCustomer,
        amount: parseInt(amount) * 100, // Convert to cents

        // These would be generated on the server
        id: 1, // Record ID will be automatically incremented
        status: "pending", // Default status for a new invoice
        date: new Date().toISOString().split("T")[0],
      };

      // TODO: Add this invoice to the database
      console.log("New Invoice:", newInvoice);
    }
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="mb-6 text-xl font-semibold text-gray-900">New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-semibold"
          >
            Customer
          </label>
          <select
            id="customer"
            onChange={(e) => setSelectedCustomer(Number(e.target.value))}
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-200"
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold">Amount</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-600 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={amount}
              placeholder="00.00"
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-7 text-sm leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}
