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
}
type Props = {
    data: DataProps[];
};
const TrendingCard = ({ data }: Props) => {
    return (
        <>
            <div className="h-auto">
                <div className=" flex-col justify-center my-10">
                <div className="flex items-center mx-10 my-10 space-x-5">
                            <h1 className="text-[2rem] text-[#e7e7e7] font-semibold">Trending</h1>
                            <Link href="/trending">
                                <a className="text-[#9d7b9d] text-[1.2rem] font-semibold">
                                    Explore all
                                </a>
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
                                            <div className="scale-95 hover:scale-100 transition-all ease-in-out duration-500">
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src={data.image}
                                                />
                                            </div>
                                            
                                            <p className="pt-5 text-md">Kaguya Sama</p>
                                            <div className="flex space-x-4 items-center">
                                            
                                            <Rating fillColor="#937193" emptyColor="#a0a0a0" size={16} initialValue={Number("8.1")/2} ratingValue={0} readonly />
                                            
                                            <p className="pt-1 text-md">8.17</p>
                                            </div>
                                            
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <SwiperSlide>
                            <div className="flex justify-center items-center scale-95 hover:scale-100 transition-all ease-in-out duration-500 bg-daccent_2">
                                            <Link href="/trending">Explore All</Link>
                                        </div>
                            
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
