import Link from 'next/link'

export default function Custom404Page() {
	return (
		<div className="flex flex-col items-center justify-center px-5 mx-auto max-w-7xl">
			<img src="/404.svg" alt="" className="w-[70%] mt-10" />
			<p role="alert" className="sr-only">
				Oops... Sorry, the page was not found. Error 404.
			</p>
			<Link href="/">
				<a className="px-5 py-3 mt-5 text-white rounded bg-primary">Go back to homepage</a>
			</Link>
		</div>
	)
}
