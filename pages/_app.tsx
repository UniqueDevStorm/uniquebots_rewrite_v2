import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import {useEffect} from "react";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap')
    }, [])

    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp