import BackgroundBlur from '@/app/ui/background-blur';
import Image from 'next/image';
import HeroImage from '@/public/hero.png';

export default function Page() {
  return (
    <main className="flex flex-col gap-4 lg:h-screen lg:flex-row lg:items-center lg:justify-end">
      <div className="min-w-xl my-8 flex flex-col items-start gap-4 px-4 lg:max-w-xl lg:gap-6">
        <BackgroundBlur />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Next.js Dashboard
        </h1>
        <p className="leading-6 text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
          dapibus consectetur. Duis quis eros euismod.
        </p>
        <a href="/login">
          <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
            Log in
          </button>
        </a>
      </div>
      <div className="w-full sm:w-1/2">
        <Image src={HeroImage} alt="Dashboard Hero Image" placeholder="blur" />
      </div>
    </main>
  );
}
