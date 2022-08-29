import type { NextPageContext } from "next";
import { Swiper, SwiperSlide } from "swiper/react";

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
                <div className=" flex flex-col justify-center my-20">
                    <div className="mx-10 space-y-10">
                        <div className="flex items-center space-x-5">
                            <h1 className="text-[2rem] text-[#e7e7e7] font-semibold">Trending</h1>
                            <a href="" className="text-[#9d7b9d] text-[1.2rem] font-semibold">
                                Explore all
                            </a>
                        </div>

                        <Swiper
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
                                        <div className="img-hover">
                                            <img
                                                className=" md:w-[198px] md:h-[277px] xl:w-[225px] xl:h-[320px]"
                                                src={data.image}
                                            ></img>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingCard;
