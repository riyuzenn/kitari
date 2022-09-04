import type { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Episode from "../../../components/ep";
import Header from "../../../components/header";
import { IStreamProps } from "../../../types";

const KitariPlayer = dynamic(() => import("../../../components/player"), {
    ssr: false
})

type StreamProps = {
    data: IStreamProps;
};
const StreamPage = ({ data }: StreamProps) => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <Header  fixed={false} />
            <div className="flex flex-col justify-center items-center pb-10 xl:px-20 xl:py-10 lg:px-20 lg:py-10">
            
            <div className="w-full xl:w-[80%]">
                
                <KitariPlayer stream_url={data.stream_url} />
                <Episode title={data.title} total={data.eptotal} id={name} />
            </div>
            
            </div>
            
            
            
        </>
    );
};

export async function getServerSideProps(context: NextPageContext) {
    const { name } = context.query;
    const res = await fetch(`https://api.kitari.ml/v1/stream/${name}`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "",
        }),
    });

    if (!res.ok) {
        console.log("Not Ok")
    }
    const data = await res.json();
    console.log(data);
    return { props: { data } };
}
export default StreamPage;
