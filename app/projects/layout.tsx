export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-blue-200/0 via-indigo-200/20 to-slate-200/0 ">
			{children}
		</div>
	);
}
