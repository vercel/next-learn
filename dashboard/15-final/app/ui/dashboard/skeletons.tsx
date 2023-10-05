// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative rounded-xl bg-gray-50 p-2 shadow-sm`}>
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-100"></div>
        <h3 className="ml-2 h-6 w-16 rounded-md bg-gray-100 text-sm font-medium"></h3>
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-100"></div>
      </div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full md:col-span-4`}>
      <h2 className="mb-4 h-8 w-36 rounded-md bg-gray-100"></h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md  bg-white p-4 md:gap-4"></div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-100"></div>
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col md:col-span-4 lg:col-span-4`}
    >
      <h2 className="mb-4 h-8 w-36 rounded-md bg-gray-100"></h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          <div className="flex flex-row items-center justify-between border-b py-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded-md bg-gray-100"></div>
                <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
              </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
          </div>
          <div className="flex flex-row items-center justify-between border-b py-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded-md bg-gray-100"></div>
                <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
              </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
          </div>
          <div className="flex flex-row items-center justify-between border-b py-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded-md bg-gray-100"></div>
                <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
              </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
          </div>
          <div className="flex flex-row items-center justify-between border-b py-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded-md bg-gray-100"></div>
                <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
              </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
          </div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
              <div className="min-w-0">
                <div className="h-5 w-40 rounded-md bg-gray-100"></div>
                <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
              </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-100"></div>
          </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-100"></div>
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <h2
        className={`${shimmer} relative mb-4 h-8 w-36 rounded-md bg-gray-100`}
      ></h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
