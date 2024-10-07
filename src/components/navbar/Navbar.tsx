// import { useState, useEffect } from "react";
// import "./Navbar.css";
// // import { flushSync } from "react-dom";
// // import { BeakerIcon } from "@heroicons/react/24/solid";

// type NavbarProps = {
// 	variant?: string;
// 	collapsible: boolean;
// 	onClick?: () => void;
// };

// const Navbar = ({ collapsible, onClick, variant }: NavbarProps) => {
// 	const [isCollapsible, setIsCollapsible] = useState(collapsible);

// 	useEffect(() => {
// 		setIsCollapsible(collapsible);
// 	}, [collapsible]);

// 	return (
// 		<>
// 			{isCollapsible && (
// 				<div className="navbar-collapsible">
// 					<nav className="nav">
// 						<div className="left">
// 							<h2 className="nav-title">
// 								<a>ClassReveal</a>
// 							</h2>
// 						</div>
// 						<div className="right">
// 							<div onClick={onClick && (() => onClick())} className="collapse">
// 								<img className="menu-icon" src="/menu.svg" alt="menu" />
// 							</div>
// 						</div>
// 					</nav>

// 					<div className="expanded-nav">
// 						<a className="nav-link">Penn State</a>
// 						<a className="nav-link">Rutgers</a>
// 						<a className="nav-link">FAQ</a>
// 						<a className="nav-link">Log in</a>
// 					</div>
// 				</div>
// 			)}
// 			{!isCollapsible && (
// 				<div className="navbar">
// 					<nav className={`nav ${variant}`}>
// 						<div className="left">
// 							<a href="#">
// 								<h5 className="nav-title">ClassReveal</h5>
// 							</a>
// 							<ul className="nav-list">
// 								<li>
// 									<a>Penn State</a>
// 								</li>
// 								<li>
// 									<a>Rutgers</a>
// 								</li>
// 							</ul>
// 						</div>
// 						<div className="right">
// 							<ul className="nav-list">
// 								<li>
// 									<a href="#faq">FAQ</a>
// 								</li>
// 								<li>
// 									<a>Login</a>
// 								</li>
// 							</ul>
// 							<div onClick={onClick && (() => onClick())} className="collapse">
// 								<img className="menu-icon" src="/menu.svg" alt="menu" />
// 							</div>
// 						</div>
// 					</nav>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import "./Navbar.css";

type NavbarProps = {
	color?: string;
	school?: string;
	navLinks?: { title: string; href: string }[];
};

const Navbar = ({ navLinks, color, school }: NavbarProps) => {
	const [fillNavbar, setFillNavbar] = useState(false);
	console.log("color", color);
	useEffect(() => {
		const fillNav = () => {
			if (window.scrollY > 0) {
				setFillNavbar(true);
			} else {
				setFillNavbar(false);
			}
		};

		window.addEventListener("scroll", fillNav);

		return () => {
			window.removeEventListener("scroll", fillNav);
		};
	}, []);
	return (
		<div className="navbar">
			<nav className={`${fillNavbar ? `filled ${color}` : ""}`}>
				<a className={`logo ${color}-title`} href="/">
					<h5>ClassReveal</h5>
				</a>
				{school && <p className={`${color}-school`}>{school}</p>}
				<div className="links">
					<ul className="left">
						{navLinks?.map((link, index) => {
							return (
								<li key={index}>
									<a className={`link ${color}`} href={link.href}>
										{link.title}
									</a>
								</li>
							);
						})}
					</ul>
					<ul className="right">
						<li>
							<a className={`link ${color}`} href="/#faq">
								FAQ
							</a>
						</li>
						<li>
							<a className={`link ${color}`} href="/login">
								Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
