export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">$45,231.89</p>
            <p className="text-xs text-gray-600 mt-1">+20.1% from last month</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Customers</h3>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">2,350</p>
            <p className="text-xs text-gray-600 mt-1">+180 from last month</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Invoices</h3>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">12,234</p>
            <p className="text-xs text-gray-600 mt-1">+19% from last month</p>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600">Pending</h3>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">573</p>
            <p className="text-xs text-gray-600 mt-1">+201 since last hour</p>
          </div>
        </div>
      </div>
    </div>
  )
}
