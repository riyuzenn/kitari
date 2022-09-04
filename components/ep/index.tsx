import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../header";

type Props = {
    total: number;
    id?: string | string[] | undefined;
    title: string;
}
export default function Episode({ total, id, title } : Props) {
    const router = useRouter();
    return (
        <>  
            
            <div className="flex flex-col space-y-5 px-5 max-h-[53vh] xl:max-h-[33vh] py-10 w-full bg-daccent_1/30">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(47px,1fr))] gap-2 overflow-y-auto mt-1 mb-2">
                {Array(total).join().split(",").map((v, index) => {
                    let i = index + 1
                    return (


                            <button onClick={() => router.push(`/stream/${id}/ep/${i}`)} disabled={router.asPath == `/stream/${id}/ep/${i}` ? true : false} 
                            className={
                                `flex border border-daccent_1 ${router.asPath == `/stream/${id}/ep/${i}` ? 
                                "bg-[#937193] text-daccent_2 border-[#000]" : "bg-daccent_1 hover:bg-daccent_2 "
                            } transition-all ease-in-out 
                                justify-center items-center px-1 py-1 w-full`}>
                                    {i}                                
                            </button>

                    )
                })}
                </div>
            </div>
            

            
        </>
    )
}