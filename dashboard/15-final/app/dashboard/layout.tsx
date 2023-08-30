export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Dashboard layout</div>
      <div>{children}</div>
    </div>
  )
}
