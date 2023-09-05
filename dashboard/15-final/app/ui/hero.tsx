import BackgroundBlur from "@/app/ui/background-blur";

export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-20 flex flex-col items-center space-y-6 p-2 md:w-1/3">
        <BackgroundBlur />
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Next.js Dashboard
        </h1>
        <p className="text-center leading-6 text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
          dapibus consectetur. Duis quis eros euismod.
        </p>
        <a href="/login">
          <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700">
            Log in
          </button>
        </a>
      </div>

      <div className="mx-auto mt-12 w-full px-4 lg:w-2/3">
        <img
          src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Finsights%2Fanalytics_dashboard.png&w=3840&q=75&dpl=dpl_9Tp4gaAJ1QFc4eSRJ99UwWvWgZ73"
          alt="Dashboard image"
        />
      </div>
    </>
  );
}
