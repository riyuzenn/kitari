import type { NextPage } from "next";
import { useRouter } from "next/router";
import useFetch from "../../lib/usefetch";

const WatchPage: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <div></div>
        </>
    );
};

export default WatchPage;
