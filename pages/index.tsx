import type { NextPageContext } from "next";
import Banner from "../components/banner";
import Footer from "../components/footer";
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
    rating: number;
}
type Props = {
    data: DataProps[];
};
const IndexPage = ({ data }) => {
    return (
        <div className="h-full w-full min-h-screen min-w-screen py-10">
            <Header />

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

            <TrendingCard />
            <Footer className="px-10" />
        </div>
    );
};
export async function getServerSideProps(context: NextPageContext) {
    const res = await fetch(`https://api.kitari.ml/v1/banner`, {
        method: "GET",
        headers: new Headers({
            token: process.env.KITARI_TOKEN || "",
        }),
    });

    // console.log(`${trendres.status} ${await trendres.json()}`);

    const data = (await res.json()) as Promise<DataProps[]>;
    return { props: { data } };
}

export default IndexPage;
