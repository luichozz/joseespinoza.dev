export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-blue-900/0 via-indigo-900 to-slate-900/0 ">
			{children}
		</div>
	);
}
