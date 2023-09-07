import BackgroundBlur from '@/app/ui/background-blur';

export default function Hero() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center space-y-6 p-2">
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

      <div className="mt-6 px-2">
        <img src="/hero.png" alt="Dashboard image" />
      </div>
    </div>
  );
}
