// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative h-[114px] overflow-hidden rounded-xl border bg-white p-6 shadow-sm`}
    >
      <div className="flex justify-between">
        <div className="h-6 w-20 rounded-lg bg-gray-100"></div>
        <div className="h-6 w-6 rounded-lg bg-gray-100"></div>
      </div>
      <div className="mt-4 h-8 w-1/2 rounded-lg bg-gray-100"></div>
    </div>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div
      className={`${shimmer} relative h-[464px] overflow-hidden rounded-xl border bg-white p-6 shadow-sm md:col-span-5`}
    >
      <div className="h-8 w-32 rounded-lg bg-gray-100"></div>
      <div className="my-4 h-[370px] w-full rounded-lg bg-gray-100"></div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative w-full  overflow-hidden rounded-xl border bg-white p-6 shadow-sm md:col-span-4 lg:col-span-3`}
    >
      <div className="h-8 w-40 rounded-lg bg-gray-100"></div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-100"></div>
          <div className="ml-4 h-10 w-44 rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-10 w-16 rounded-lg bg-gray-100"></div>
      </div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-100"></div>
          <div className="ml-4 h-10 w-44 rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-10 w-16 rounded-lg bg-gray-100"></div>
      </div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-100"></div>
          <div className="ml-4 h-10 w-44 rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-10 w-16 rounded-lg bg-gray-100"></div>
      </div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-100"></div>
          <div className="ml-4 h-10 w-44 rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-10 w-16 rounded-lg bg-gray-100"></div>
      </div>
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gray-100"></div>
          <div className="ml-4 h-10 w-44 rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-10 w-16 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
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
