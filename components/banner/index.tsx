
import { FaPlus, FaPlay, FaStar, FaBirthdayCake, FaClock  } from "react-icons/fa";

function truncate(str: string, words: number) {
    if (str === "") return;
    return `${str.split(" ").splice(0, words).join(" ")} ...`;
}

type BannerProps = {
    title: string,
    videourl: string,
    synopsis: string,
    rating: string,
    airingtime: string,
    released: string,
    onWatchClick: () => void;
    onAddClick: () => void;
}
function Banner({
    title,
    videourl,
    synopsis,
    rating,
    airingtime,
    released,
    onWatchClick,
    onAddClick
}: BannerProps){
  return (
    <>
      <div className="flex-col xl:flex xl:relative lg:relative lg:flex bg-[#000]">
        <div className="backdrop">
            <video autoPlay={true} loop={true} src={videourl}></video>
        </div>
        <div className="flex-col bg-[#000] px-10 py-10 space-y-5
        
            xl:bg-inv xl:absolute xl:mx-20 
            xl:my-48 xl:space-y-10 xl:w-[50%]
            
            lg:bg-inv lg:absolute lg:mx-20 
            lg:my-24 lg:space-y-7 lg:w-[55%]
            "
          >
            <h1 className="text-[#fff] text-[1.3rem] font-bold xl:text-[3rem] lg:text-[2.5rem]">{title}</h1>
            <div className="flex space-x-5">
              <div className="flex items-center">
                <FaStar size={24} className="pr-3" />
                <p className="h-[24] font-semibold text-[12px] lg:text-[12px]">{rating}</p>
              </div>
              <div className="flex items-center">
                <FaClock size={24} className="pr-3" />
                <p className="h-[24] font-semibold text-[12px] lg:text-[12px]">{airingtime}</p>
              </div>
              <div className="flex items-center">
                <FaBirthdayCake size={24} className="pr-3" />
                <p className="h-[24] font-semibold text-[12px] lg:text-[12px]">{released}</p>
              </div>
            </div>
            <p className="hidden xl:block lg:block lg:text-[1rem] xl:text-[1.2rem] ">
              {truncate(synopsis, 30)}
            </p>
            <div className="flex space-x-5">
              <button onClick={onWatchClick} className="py-2 px-2 text-[12px] w-36 xl:w-40 flex justify-center items-center
                rounded-md border border-[#c5c5c5] dark:bg-primary 
                dark:hover:bg-[#b7b7b7] dark:hover:border-[#b5b5b5] 
                font-semibold transition-all ease-in-out xl:text-[14px] 
                text-[#252525] hover:text-[#353535]">
                  <FaPlay size={20} className="pr-3" /> 
                  Watch Now
              </button>
              <button onClick={onAddClick} className="py-2 px-2 w-40 flex justify-center items-center
                rounded-md border border-daccent_2 dark:bg-daccent_1 
                dark:hover:bg-daccent_2 dark:hover:border-daccent_3 
                font-semibold transition-all ease-in-out text-[14px] hover:text-[#bebebe]">
                  <FaPlus size={20} className="pr-3" />  
                  Add to my list
              </button>
            </div>
          </div>
      </div>

      
    </>
  )
}

export default Banner;
