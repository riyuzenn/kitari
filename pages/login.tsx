import type { NextPage } from "next";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const LoginPage: NextPage = () => {
    return (
        <section>
            <div className="landing justify-center items-center xl:justify-start xl:items-start lg:justify-start lg:items-start">
                <div className="my-10 xl:my-0 lg:px-10 lg:py-10 xl:px-20 xl:py-20 xl:space-y-20 space-y-20">
                    <div className="px-10 xl:px-0 lg:px-0">
                        <Link href="/">
                            <a>
                                <img className="text-[2rem] w-20 h-20 font-semibold" src="/images/logo.png" />
                            </a>
                        </Link>
                    </div>
                    <div className="form flex-col justify-center  space-y-7 rounded-[8px] px-10 lg:py-10 lg:mx-20 xl:py-10 xl:mx-20 xl:ml-12 ">
                        <h1 className="text-[1.5rem] font-medium text-[#e7e7e7]">👋 Welcome Back</h1>
                        <p className="text-[#bfbfbf]">We're happy to see you again!</p>
                        <p>As of now, Kitari only support existing Google or Discord account.</p>
                        <br />
                        <div className="space-y-5">
                            <button
                                type="button"
                                className="transition duration-300 text-base flex items-center space-x-2 px-3 py-2 text-daccent_4 rounded-md hover:bg-opacity-80 shadow-lg relative bg-white text-black font-bold justify-center w-full bg-[#e7e7e7] gap-x-2"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 48 48"
                                    enable-background="new 0 0 48 48"
                                    className="w-6 h-6"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#FFC107"
                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                    ></path>
                                    <path
                                        fill="#FF3D00"
                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                    ></path>
                                    <path
                                        fill="#4CAF50"
                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                    ></path>
                                    <path
                                        fill="#1976D2"
                                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                    ></path>
                                </svg>
                                <p>Sign in with Google</p>
                            </button>
                            <button
                                type="button"
                                className="transition duration-300 text-base  space-x-2 px-3 py-2 text-[#e7e7e7] rounded-md shadow-lg relative bg-[#5865F2] !hover:bg-white/20 text-white font-bold flex items-center justify-center w-full hover:!bg-opacity-90 bg-white gap-x-2"
                            >
                                <FaDiscord className="h-6 w-6" />
                                <p>Sign in with Discord</p>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-5 xl:space-y-5 xl:flex-col lg:space-y-5 lg:flex-col">
                        <div className="xl:flex xl:gap-10 lg:flex lg:gap-10">
                            <div className="flex space-x-5 justify-center items-center xl:justify-start lg:justify-start">
                                <a>
                                    <FaGithub size={20} />
                                </a>
                                <a>
                                    <FaTwitter size={20} />
                                </a>
                                <a>
                                    <FaDiscord size={20} />
                                </a>
                            </div>
                            <p className="hidden xl:block">|</p>
                            <div className="flex space-x-5 justify-center items-center xl:justify-start lg:justify-start">
                                <p>About</p>
                                <p>Terms of Service</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="hidden xl:block justify-end">
                            <a className="text-[#e7e7e7]" href="https://unsplash.com/@fakurian" target="_blank">
                                Image by @fakurian - unsplash.com
                            </a>
                        </div>
                    </div>

                    {/* <div className="flex space-x-5 justify-between text-[1.5rem]">
                        <div className="flex-col justify-center xl:flex xl:justify-start items-center space-x-5">
                        <div className="flex space-x-5 justify-center">
                        <a><FaGithub  size={20} /></a>
                        <a><FaTwitter size={20} /></a>
                        <a><FaDiscord size={20} /></a>
                        </div>
                        <div className="flex rounded-[50%] w-2 h-2 bg-[gray]"></div>
                        <p>About</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        </div>
                        <div className="hidden xl:block justify-end">
                            <a className="text-[#e7e7e7]" href="https://unsplash.com/@fakurian" target="_blank" >Image by @fakurian - unsplash.com</a>
                        </div>

                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
