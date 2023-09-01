import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

export default function Search() {
  async function submitForm(formData: FormData) {
    'use server'
    // TODO: Implement search
    // console.log(formData)
  }
  return (
    <div className="w-full h-full px-4 relative flex items-center">
      <MagnifyingGlassIcon className="h-5 text-gray-400"/>
      <form className="h-full w-full" action={submitForm}>
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <input
          id="search-field"
          className="focus:outline-none px-2 h-full w-full border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
    </div>
  )
}