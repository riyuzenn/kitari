import type { NextPageContext } from "next";
import Banner from "../components/banner";
import Header from "../components/header";
import TrendingCard from "../components/trending/";

interface DataProps {
    image: string;
    videoUrl: string;
    title: string;
    jp_title: string;
    description: string;
    rating: string;
    released: string;
    type: string;
}
interface TrendProps {
    image: string;
    title: string;
}
type Props = {
    data: DataProps[];
    trend: TrendProps[];
};
const IndexPage = ({ data, trend }: Props) => {
    return (
        <>
            <Header />
            <div>
                <Banner
                    title={data[0].title}
                    videourl={data[0].videoUrl}
                    synopsis={data[0].description}
                    rating={data[0].rating}
                    airingtime={data[0].type}
                    released={data[0].released}
                    onWatchClick={() => {
                        alert("Watch");
                    }}
                    onAddClick={() => {
                        alert("Add");
                    }}
                />
            </div>
            <TrendingCard data={trend} />
        </>
    );
};
export async function getServerSideProps(context: NextPageContext) {
    const datares = await fetch(`https://api.kitari.ml/v1/banner`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "",
        }),
    });
    const trendres = await fetch(`https://api.kitari.ml/v1/trending`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "",
        }),
    });

    const data = (await datares.json()) as Promise<DataProps[]>;
    const trend = (await trendres.json()) as Promise<TrendProps[]>;
    return { props: { data, trend } };
}

export default IndexPage;
