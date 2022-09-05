import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch, FaBell } from "react-icons/fa";
import Search from "../search";

type Props = {
    className?: string;
    fixed?: boolean;
};

export default function Header({ className = "", fixed = true }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const router = useRouter();
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`${className ? className : ""} ${scrollPosition || navbarOpen ? "bg-[#000]" : ""} ${
                    fixed ? "fixed" : "sticky bg-[#010101]"
                } top-0  w-full z-30 clearNav md:bg-opacity-95 transition duration-500 ease-in-out`}
            >
                <div className="top-0 z-30 h-1 gb"></div>
                <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <Link href="/">
                            <a className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline">
                                {/* <h1 className="text-[16px]  tracking-tighter text-[#bfbfbf] md:text-4x1 text-opacity-100 lg:text-[20px]">
                 
                </h1> */}

                                <img src="/images/logo.png" height={45} width={45} />
                            </a>
                        </Link>
                        <button
                            className={`md:hidden font-medium text-[15px] justify-center text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-4 py-2`}
                            type="button"
                            aria-label="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaSearch size={18} />
                        </button>
                    </div>
                    <div className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <nav className="flex-col flex-grow">
                            <ul className="flex flex-grow justify-center md:justify-end md:px-0 md:pb-0 lg:px-0 lg:pb-0 xl:px-0 xl:pb-0 lg:justify-end xl:justify-end flex-wrap items-center px-2 pb-5 space-x-2">
                                <li>
                                    {/* <button
                                        className={`font-medium text-[15px] justify-center text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-4 py-2 ${
                                            router.asPath === "" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                        }`}
                                    >
                                        <FaSearch size={18} />
                                    </button> */}
                                    <Search />
                                </li>
                                <li>
                                    <button
                                        className={`font-medium text-[15px] hidden py-2 justify-center text-[#a0a0a0] rounded-md hover:text-[#937193] flex items-center transition duration-150 ease-in-out mx-5 ${
                                            router.asPath === "" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                        }`}
                                    >
                                        <FaBell size={18} />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a
                                            className={`font-medium text-[15px] hidden rounded-md bg-[#bfbfbf] text-[#0e0e0e] hover:bg-[#a0a0a0] flex items-center transition duration-150 ease-in-out px-5 py-1`}
                                        >
                                            Login
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
