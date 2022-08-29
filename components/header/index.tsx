import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch, FaBell } from "react-icons/fa";

type Props = {
    className?: string;
};

export default function Header(props: Props) {
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
                className={`${props.className ? props.className : ""} ${
                    scrollPosition ? "bg-[#000]" : ""
                } fixed top-0  w-full z-30 clearNav md:bg-opacity-95 transition duration-500 ease-in-out`}
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
                            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
                            type="button"
                            aria-label="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#bfbfbf"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <nav className="flex-col flex-grow">
                            <ul className="flex flex-grow justify-center md:justify-end md:px-0 md:pb-0 lg:px-0 lg:pb-0 xl:px-0 xl:pb-0 lg:justify-end xl:justify-end flex-wrap items-center px-2 pb-5 space-x-2">
                                
                                <li>
                                    
                                        <button
                                            className={`font-medium text-[15px] justify-center text-[#a0a0a0] rounded-md hover:text-[#0e0e0e] hover:bg-[#bfbfbf] flex items-center transition duration-150 ease-in-out px-4 py-2 ${
                                                router.asPath === "" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            <FaSearch size={18} />
                                        </button>

                                </li>
                                <li>
                                        <button
                                            className={`font-medium text-[15px] py-2 justify-center text-[#a0a0a0] rounded-md hover:text-[#937193] flex items-center transition duration-150 ease-in-out mx-5 ${
                                                router.asPath === "" ? "bg-[#bfbfbf] text-[#0e0e0e]" : ""
                                            }`}
                                        >
                                            <FaBell size={18} />
                                        </button>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a
                                            className={`font-medium text-[15px] rounded-md bg-[#bfbfbf] text-[#0e0e0e] hover:bg-[#a0a0a0] flex items-center transition duration-150 ease-in-out px-5 py-1`}
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
