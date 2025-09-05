"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { PiCursor, PiCursorBold, PiCursorFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const handleScroll = () => {
		const threshold = 10;
		if (window.scrollY > threshold) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const isActive = (path: string) => {
		if (path === '/') {
			return pathname === path;
		}
		return pathname?.startsWith(path);
	};

	return (
		<>
			<nav
				className="z-[100] fixed w-full top-0 left-0"
				style={{
					boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
					borderBottomLeftRadius: 40,
					borderBottomRightRadius: 40,
					background: "linear-gradient(to right, #fbebd5, #f7ecde)",
				}}
			>
				<div className="w-[calc(100%-6rem)] mx-auto flex items-center justify-center relative">
					<div className="flex justify-center items-center flex-grow">
						<a href={"/"} className={"flex items-center"}>
							<img
								className={`object-contain duration-300 ${
									scrolled ? "h-[72px]" : "md:h-[110px] h-[90px] sm:h-[90px]"
								}  w-32 sm:w-48 md:w-56 lg:w-72`}
								src="/images/homepage/Optimum Laser Brown Logo.png"
								alt={"navbar logo"}
							/>
						</a>
					</div>

					<div
						className="md:hidden absolute right-0 flex flex-col gap-[7px] items-center justify-center cursor-pointer"
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<div
							className={`h-[1px] duration-200 w-[20px] rounded-[2px] bg-black ${
								menuOpen ? "rotate-[45deg] translate-y-[8px]" : ""
							}`}
						></div>
						<div
							className={`h-[1px] duration-200 w-[20px] rounded-[2px] bg-black ${
								menuOpen ? "opacity-0" : ""
							}`}
						></div>
						<div
							className={`h-[1px] duration-200 w-[20px] rounded-[2px] bg-black ${
								menuOpen ? "rotate-[-45deg] translate-y-[-8px]" : ""
							}`}
						></div>
					</div>

                    <div className={`hidden md:block absolute right-0 md:translate-x-2 lg:translate-x-0 ${styles.ctaRightMini} ${styles.ctaRightNudge}`} style={{zIndex: 2}}>
						<a href="/contact-us">
                            <button
                                className={
                                    styles.buttonStyles +
                                    " relative text-[0.6rem] lg:text-base xl:text-xl px-2 lg:px-4 text-center " +
                                    styles.ctaRightPad
                                }
                            >
								<img
									alt="cursor"
									src="/icons/cursor.png"
									className="absolute translate-x-[50%] translate-y-[50%] right-0 bottom-0 h-[2.5rem] w-[2.5rem]"
								/>
								<span className={styles.ctaLine1}>CLICK FOR FREE</span>
								<span className={styles.ctaLine2}>CONSULTATION!</span>
							</button>
						</a>
					</div>
                    <div className={`absolute left-0 ${styles.ctaLeftMini} ${styles.ctaLeftNudge}`}>
						<a href="/booking">
                            <button
                                className={
                                    styles.buttonStyles +
									" relative hidden md:block text-[0.6rem] lg:text-base xl:text-xl md:px-4 lg:px-6 " +
                                    styles.ctaLeftButton
                                }
                            >
								<span className={styles.ctaLeftLine1}>SET AN</span>{' '}
								<span className={styles.ctaLeftLine2}>APPOINTMENT</span>
							</button>
							<div className="block md:hidden p-[1rem] rounded-full bg-[#35281e] duration-300 hover:bg-[#5a473d]">
								<FaCalendarCheck className="text-[1.5rem] text-white" />
							</div>
						</a>
					</div>
				</div>
				<div
					className={`w-full overflow-hidden md:overflow-visible grid md:flex ${pathname === '/about-us' ? 'mb-0 md:mb-[1rem]' : 'mb-[1rem]'}`}
					style={{
						gridTemplateRows: menuOpen ? "1fr" : "0fr",
						transition: "0.2s",
					}}
				>
					<ul
						className={`items-center min-h-0 flex-1 justify-start md:justify-evenly duration-200 flex md:p-0  flex-col md:flex-row gap-[2rem] ${
							menuOpen ? "min-h-[100vh]" : ""
						} md:gap-0  md:mt-0 ${styles.navbarItems}`}
					>
						<li>
							<a
								href="tel:516-495-4908"
								className={styles.myPhone}
								style={{
									display: "flex",
									gap: "1rem",
									alignItems: "center",
								}}
							>
								<FaPhoneAlt size={25} /> 516-495-4908
							</a>
						</li>
						<li>
							<a href={"/"} className={`${styles.myLink} ${isActive('/') ? 'font-[900]' : ''}`}>
								HOME
							</a>
						</li>
						<li className="relative">
							<div
								onMouseEnter={() => {
									setIsOpen(true);
								}}
								onMouseLeave={() => {
									setIsOpen(false);
								}}
								onClick={() => setIsOpen(!isOpen)}
								className={`cursor-pointer ${styles.myLink} ${isActive('/services') ? 'font-[900]' : ''}`}
							>
								<div className="flex items-center justify-center gap-[10px]">
									OUR SERVICES{" "}
									<GoTriangleDown
										size={20}
										className={`inline-block ${
											isOpen ? "rotate-[180deg]" : ""
										}`}
									/>
								</div>
                                <div
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                    className={`menu-dropdown grid ${
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    } md:absolute md:top-[100%] md:left-[50%] md:translate-x-[-50%] w-full md:min-w-[400px] z-[2000] md:shadow-[0px_4px_32px_rgba(0,0,0,0.1)]  rounded-[10px] md:${
                                        isOpen ? "translate-y-[0px]" : "translate-y-[10px]"
                                    }`}
                                    style={{
                                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                                        overflow: isOpen ? "visible" : "hidden",
                                        transition: "0.2s",
                                        pointerEvents: isOpen ? 'auto' : 'none',
                                        visibility: isOpen ? 'visible' : 'hidden',
                                        opacity: isOpen ? 1 : 0
                                    }}
                                >
									<ul
										className={`min-h-0 duration-100 flex flex-col justify-start items-center`}
										style={{
											background:
												"linear-gradient(to right, rgb(251, 235, 213), rgb(247, 236, 222))",
											fontFamily: "Raleway",
											fontWeight: 600,
											letterSpacing: "0.3rem",
										}}
									>
										<Link
											onClick={() => {
												setMenuOpen(false);
											}}
											className={`w-full hover:bg-[rgba(0,0,0,0.02)] text-center py-[0.5rem] mb-[0.5rem] mt-[1rem] hover:unset duration-200 ${isActive('/services/laser-service') ? 'font-[900]' : ''}`}
											href="/services/laser-service"
										>
											Laser Hair Removal
										</Link>

										<Link
											onClick={() => {
												setMenuOpen(false);
											}}
											className={`w-full hover:bg-[rgba(0,0,0,0.02)] text-center py-[0.5rem] mb-[0.5rem] hover:unset duration-200 ${isActive('/services/pigmentation-service') ? 'font-[900]' : ''}`}
											href="/services/pigmentation-service"
										>
											Pigmentation Removal
										</Link>
										<Link
											onClick={() => {
												setMenuOpen(false);
											}}
											className={`w-full hover:bg-[rgba(0,0,0,0.02)] text-center py-[0.5rem] mb-[1rem] hover:unset duration-200 ${isActive('/services/vein-removal') ? 'font-[900]' : ''}`}
											href="/services/vein-removal"
										>
											Vein Removal
										</Link>
										<Link
											onClick={() => {
												setMenuOpen(false);
											}}
											className={`w-full hover:bg-[rgba(0,0,0,0.02)] text-center py-[0.5rem] mb-[0.5rem] hover:unset duration-200 ${isActive('/services/facial-service') ? 'font-[900]' : ''}`}
											href="/services/facial-service"
										>
											Facial Services
										</Link>
									</ul>
								</div>
							</div>
						</li>
						<li>
							<a href={"/about-us"} className={`${styles.myLink} ${isActive('/about-us') ? 'font-[900]' : ''}`}>
								ABOUT US
							</a>
						</li>
						<li>
							<a href={"/contact-us"} className={`${styles.myLink} ${isActive('/contact-us') ? 'font-[900]' : ''}`}>
								CONTACT US
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
