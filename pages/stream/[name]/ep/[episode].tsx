import type { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
import { IStreamProps } from "../../../../types";

const KitariPlayer = dynamic(() => import("../../../../components/player"), {
    ssr: false
})

type StreamProps = {
    data: IStreamProps;
};
const StreamPage = ({ data }: StreamProps) => {
    return (
        <>
            <KitariPlayer stream_url={data.stream_url} />
        </>
    );
};

export async function getServerSideProps(context: NextPageContext) {
    const { name, episode } = context.query;
    const res = await fetch(`https://api.kitari.ml/v1/stream/${name}?episode=${episode}`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "",
        }),
    });

    if (!res.ok) {
        console.log("Not Ok")
    }
    console.log(context.query);
    const data = await res.json();
    return { props: { data } };
}
export default StreamPage;
