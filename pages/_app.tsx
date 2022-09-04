import "../styles/globals.css";
import "swiper/css";
import "@vime/core/themes/default.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function Kitari({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <NextNProgress color="#937193" />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default Kitari;
