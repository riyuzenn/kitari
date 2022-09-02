import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, History, Mousewheel } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/history";
import "swiper/css/mousewheel";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Rating } from "../rating";

interface DataProps {
    image: string;
    title: string;
    rating: number;
}
type Props = {
    data: DataProps[];
};
const TrendingCard = ({ data }: Props) => {
    function truncate(str: string, words: number) {
        if (str === "") return;
        let truncated_str = str.split(" ").splice(0, words).join(" ");
        return `${truncated_str} ${str.length > truncated_str.length ? "..." : ""}`;
    }
    return (
        <>
            <div className="h-auto">
                <div className=" flex-col justify-center my-10">
                    <div className="flex items-center mx-10 my-10 space-x-5">
                        <h1 className="text-[2rem] text-[#e7e7e7] font-semibold">Trending</h1>
                        <Link href="/trending">
                            <a className="text-[#9d7b9d] text-[1.2rem] font-semibold">Explore all</a>
                        </Link>
                    </div>
                    <div className="flex mx-10">
                        <Swiper
                            modules={[Navigation, Pagination, Zoom, History, Mousewheel]}
                            spaceBetween={1}
                            slidesPerView={5}
                            breakpoints={{
                                320: {
                                    width: 320,
                                    slidesPerView: 2,
                                },
                                360: {
                                    width: 360,
                                    slidesPerView: 2,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                820: {
                                    width: 820,
                                    slidesPerView: 3,
                                },
                                1024: {
                                    width: 1024,
                                    slidesPerView: 5,
                                },
                                1280: {
                                    width: 1280,
                                    spaceBetween: 10,
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {data.map((data: DataProps, index: number) => {
                                return (
                                    <SwiperSlide>
                                        <div>
                                            <div className="relative bg-daccent_1 scale-95 hover:scale-100 transition-all ease-in-out duration-500">
                                                <div className="pt-[140%] bg-daccent_1">
                                                    <img
                                                        className="absolute transition-all ease-in-out top-0 left-0 w-full h-full"
                                                        src={data.image}
                                                    />
                                                </div>
                                            </div>

                                            <p className="pt-5 text-md">{truncate(data.title, 3)}</p>
                                            <div className="flex space-x-4 items-center">
                                                <Rating
                                                    fillColor="#937193"
                                                    emptyColor="#a0a0a0"
                                                    size={16}
                                                    initialValue={data.rating / 2}
                                                    ratingValue={0}
                                                    readonly
                                                />

                                                <p className="pt-1 text-md">{data.rating.toString()}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <SwiperSlide>
                                <Link href="/trending">
                                    <div className="relative bg-daccent_1 transition-all ease-in-out duration-500">
                                        <div className="pt-[140%] bg-daccent_1">
                                            <h1 className="flex absolute top-0 left-0 w-full h-full text-xl justify-center items-center">
                                                Explore All
                                            </h1>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        {/* <div className="flex flex-col  space-y-10 pl-5">
                            <button className=" bg-daccent_2 py-20 px-5 rounded-xl">
                                <FaAngleRight size={20} />
                            </button>
                            <button className=" bg-daccent_2 py-20 px-5 rounded-xl">
                                <FaAngleLeft size={20} />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingCard;
