import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

type Props = {
    notice?: boolean;
    className?: string;
};

export default function Footer() {
    function getDate() {
        let d = new Date();
        let year = d.getFullYear();
        let initial = 2022;
        return `${initial === year ? initial : `${initial}-${year}`}`;
    }
    return (
        <footer className="footer w-full bg-laccent_2 px-[1rem] py-[5rem] dark:bg-daccent_2">
            <div className="mx-auto max-w-screen-lg items-center p-6">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center md:grid-cols-4 md:grid-rows-1 md:justify-items-center md:text-left">
                    <div>
                        <h4 className="mb-5 font-normal">General Resources</h4>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="/news">
                                <a target="_blank">News</a>
                            </Link>
                        </p>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="/release-dates">
                                <a target="_blank">Release Dates</a>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-5">About Kitari</h4>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="/hiring">
                                <a target="_blank">We're Hiring</a>
                            </Link>
                        </p>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="https://twitter.com/kitariapp">
                                <a target="_blank">Twitter</a>
                            </Link>
                        </p>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="https://github.com/kitariapp">
                                <a target="_blank">Github</a>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-5">Legal</h4>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="/privacy-policy">
                                <a target="_blank">Privacy Policy</a>
                            </Link>
                        </p>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="/tos">
                                <a target="_blank">Terms of Service</a>
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-5">Community</h4>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="https://discord.gg">
                                <a target="_blank">Discord</a>
                            </Link>
                        </p>
                        <p className="text-[#121212]/25 transition ease-in-out hover:text-primary dark:text-[#e8e8e8]/50 dark:hover:text-primary">
                            <Link href="https://reddit.com/r/kitari">
                                <a target="_blank">Reddit</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="mb-[5px] grid min-w-[60px] grid-rows-2 place-items-center pt-10 text-center text-[24px] font-semibold">
                    <div>
                        <Link href="/">
                            <a>
                                <div className="mb-[5px] flex min-w-[60px] flex-none flex-row flex-nowrap items-center text-[24px] font-semibold">
                                    <img src="/images/logo.png" width={32} height={32} />
                                    <h4 className="px-3" style={{ fontSize: "1.3rem" }}>
                                        {" "}
                                        Kitari
                                    </h4>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <p className=" text-[11px] text-[#1212]/25 dark:text-[#e8e8e8]/50">
                        Made with ❤️ by{" "}
                        <span>
                            <a
                                className=" text-[11px] text-primary hover:text-lfg hover:underline dark:hover:text-dfg"
                                href="/contributors"
                            >
                                Kitari Developers
                            </a>
                        </span>
                        <br />
                        {`Copyright © ${getDate()} Kitari. All rights Reserved`}
                    </p>
                </div>
            </div>
        </footer>
    );
}
