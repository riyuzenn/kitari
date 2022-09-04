import { Player, DefaultUi, Hls } from "@vime/react";


type KitariProps = {
    stream_url: string;
};
const KitariPlayer = ({ stream_url }: KitariProps) => {
    return (
        <Player theme="dark">
            <DefaultUi>
            <Hls version="latest">
                <source data-src={stream_url} type="application/x-mpegURL" />
            </Hls>
            </DefaultUi>
            
        </Player>
    );
};


export default KitariPlayer;