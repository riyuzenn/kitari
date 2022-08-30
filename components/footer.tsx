import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

type Props = {
    notice?: boolean;
    className?: string;
}

export default function Footer({ notice = true, className = "" }: Props) {
    function getDate() {
        let d = new Date();
        let year = d.getFullYear();
        let initial = 2022;
        return `${initial === year? initial : `${initial}-${year}`}`
    }

    return (
        <>
            <div className={`${className} space-y-5 xl:space-y-5 xl:flex-col lg:space-y-5 lg:flex-col`}>
                <div className="xl:flex xl:gap-10 lg:flex lg:gap-10">
                    <div className="flex space-x-5 justify-center items-center xl:justify-start lg:justify-start">
                        <a
                            className="transition-all ease-in-out hover:text-[#e7e7e7]"
                            href="https://github.com/kitariapp"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            className="transition-all ease-in-out hover:text-[#e7e7e7]"
                            href="https://twitter.com/kitariapp"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a className="transition-all ease-in-out hover:text-[#e7e7e7]" href="https://discord.com">
                            <FaDiscord size={20} />
                        </a>
                    </div>
                    <p className="hidden xl:block">|</p>
                    <div className="flex space-x-5 justify-center items-center xl:justify-start lg:justify-start">
                        <Link href="/about">
                            <a className="transition-all ease-in-out hover:text-[#e7e7e7]">About</a>
                        </Link>
                        <Link href="/tos">
                            <a className="transition-all ease-in-out hover:text-[#e7e7e7]">Terms of Service</a>
                        </Link>
                        <Link href="/privacy">
                            <a className="transition-all ease-in-out hover:text-[#e7e7e7]">Privacy Policy</a>
                        </Link>
                    </div>
                </div>
                <div className="hidden xl:block justify-end">
                    {notice ?
                        <p>{`© ${getDate()} Kitari Developers. All rights reserved. `}</p> : 
                        <a className="text-[#e7e7e7]" href="https://unsplash.com/@fakurian" target="_blank">
                            Image from @fakurian - unsplash.com
                        </a>
                    }
                </div>
            </div>
        </>
    );
}
