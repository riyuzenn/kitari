import { useRouter } from "next/router";
import React, { useState } from "react";
import useFetch from "../lib/usefetch";
import { ISearchResult } from "../types";

type SearchResultProps = {
    title: string;
    image_url: string;
    stream_url: string;
};

const SearchResult = ({ title, image_url, stream_url }: SearchResultProps) => {
    const router = useRouter();
    return (
        <React.Fragment>
            <button
                className="flex hover:bg-daccent_2 px-5 py-2 transition-all ease-in-out duration-300 space-x-2"
                onClick={() => router.push(stream_url)}
            >
                <div className="min-w-[55px] max-w-[55px]">
                    <img className="w-full" src={image_url} />
                </div>

                <div className="flex flex-col space-y-2 justify-start">
                    <h1 className="text-[#bfbfbf] text-sm text-left font-semibold">{title}</h1>
                    {/* <div className="flex space-x-2">
                        <p className="text-[#bfbfbf] text-sm">Summer 2022</p>
                        <p className="text-[#bfbfbf] text-sm">TV</p>
                        <p className="text-[#bfbfbf] text-sm">23m</p>
                    </div> */}
                </div>
            </button>
        </React.Fragment>
    );
};

export default function Search() {
    const [focus, setFocus] = useState(false);
    const [divFocus, setDivFocus] = useState(false);
    const [value, setValue] = useState("");

    const { data, error } = useFetch<ISearchResult[]>(`https://api.kitari.ml/v1/search?q=${value}`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "ENGv9tLVx6P4uoDixSdSflhopNZTj2BtFJXQx_bM1jw",
        }),
    });
    return (
        <React.Fragment>
            <div className="">
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="h-5 w-5 fill-[#bfbfbf]"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                        >
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                    </span>
                    <input
                        className={`md:w-96 lg:w-96 xl:w-96 placeholder:text-[#a0a0a0]/40 
                text-[#bfbfbf] py-2 pl-10 outline-none bg-[#0f0f0f] border 
                border-daccent_2  hover:border-daccent_3 
                transition-all ease-in-out duration-500 ${focus && value ? "rounded-t-md" : "rounded-md"}`}
                        placeholder="Search"
                        type="text"
                        onFocus={() => {
                            setFocus(true);
                        }}
                        onBlur={() => {
                            divFocus ? setFocus(true) : setFocus(false);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>

                <div
                    onMouseEnter={() => {
                        setDivFocus(true);
                    }}
                    onMouseLeave={() => setDivFocus(false)}
                    className={`
                ${focus && value ? "block" : "hidden"} flex flex-col transition-all 
                ease-in-out duration-500 h-96 absolute rounded-b-md border border-daccent_2
                top-13 bg-[#0F0F0F] md:w-96 lg:w-96 xl:w-96 w-[250px] space-y-5 overflow-y-auto`}
                >
                    {data ? (
                        data.map((v, i) => {
                            return <SearchResult title={v.name} image_url={v.image_url} stream_url={v.stream_url} />;
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
