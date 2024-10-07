import Navbar from "../components/navbar/Navbar";
import PrimaryWave from "../assets/bg-waves/primary-wave.svg?react";
import SecondaryWave from "../assets/bg-waves/secondary-wave.svg?react";
import TertiaryWave from "../assets/bg-waves/tertiary-wave.svg?react";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<>
					<Navbar
						color="0,0,0"
						school="Rutgers&nbsp;University"
						navLinks={[
							{ title: "Departments", href: "/ru/departments" },
							{ title: "Courses", href: "/ru/courses" },
							{ title: "Professors", href: "/ru/professors" },
							{ title: `Submit\u00A0a\u00A0Review`, href: `/ru/review` }
						]}
					/>
					<div className="waves">
						<PrimaryWave className="rev-wave rev-primary-wave" fill="#cc0033" />
						<SecondaryWave
							className="rev-wave rev-secondary-wave"
							fill="#cc0033"
						/>
						<TertiaryWave
							className="rev-wave rev-tertiary-wave"
							fill="#cc0033"
						/>
					</div>
					{children}
				</>
			</body>
		</html>
	);
}
