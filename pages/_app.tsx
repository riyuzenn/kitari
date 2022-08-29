import '../styles/globals.css';
import 'swiper/css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "next-themes";


function Kitari({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme='dark'>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Kitari;
