import Search from "../ui/search";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Search />
      <div>{children}</div>
    </div>
  )
}
