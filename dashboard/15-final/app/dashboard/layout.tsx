export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 md:p-8">{children}</div>
    </div>
  )
}
