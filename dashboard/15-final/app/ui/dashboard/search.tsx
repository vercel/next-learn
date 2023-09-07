import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search() {
  async function submitForm(formData: FormData) {
    'use server';
    // TODO: Implement search
  }
  return (
    <div className="relative flex h-full w-full items-center px-4">
      <MagnifyingGlassIcon className="h-5 text-gray-400" />
      <form className="h-full w-full" action={submitForm}>
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <input
          id="search-field"
          className="h-full w-full border-0 px-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
    </div>
  );
}
