export default function Search() {
  return (
    <div>
      <form className="relative flex w-auto p-2" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <input
          id="search-field"
          className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
    </div>
  )
}