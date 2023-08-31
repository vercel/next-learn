import SideNav from '../ui/dashboard-sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen">
			<SideNav />
			<div>{children}</div>
		</div>
	);
}
