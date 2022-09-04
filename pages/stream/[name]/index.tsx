import type { NextPage, NextPageContext } from "next";
import type { IStreamProps } from "../../../types";
import dynamic from "next/dynamic";

const KitariPlayer = dynamic(() => import("../../../components/player"), {
    ssr: false
})
type StreamProps = {
    data: IStreamProps;
};

const StreamPage = ({ data }: StreamProps) => {
    return (
        <>
            <h1>{data.eptotal}</h1>
            <KitariPlayer stream_url={data.stream_url} />
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
    console.log(context.query);
    const data = await res.json();
    return { props: { data } };
}
export default StreamPage;
