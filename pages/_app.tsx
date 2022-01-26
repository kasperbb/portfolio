import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/Layout/Layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Kasper Bø Bjørnø – Front-end Developer</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
