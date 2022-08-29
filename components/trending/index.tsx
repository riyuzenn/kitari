
import { Swiper, SwiperSlide } from "swiper/react";

export default function TrendingCard() {
    return (
      <>
        <div className="bg-[#121212] h-[400px]">
          <Swiper
              spaceBetween={5}
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
                        slidesPerView: 4,
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
            
          </Swiper>
        </div>
      </>
    )
}

