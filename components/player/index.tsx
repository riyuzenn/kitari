import { Player, DefaultUi, Hls } from "@vime/react";


type KitariProps = {
    stream_url: string;
    className?: string;
};
const KitariPlayer = ({ stream_url, className = "" }: KitariProps) => {
    return (
        <Player className={className} theme="dark">
            <DefaultUi>
            <Hls version="latest">
                <source data-src={stream_url} type="application/x-mpegURL" />
            </Hls>
            </DefaultUi>
            
        </Player>
    );
};


export default KitariPlayer;