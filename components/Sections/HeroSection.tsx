import { ArrowRightIcon } from '@heroicons/react/solid'

export const HeroSection = () => {
	return (
		<header className="relative px-5 mx-auto my-20 text-center bg-white lg:my-40 lg:text-left max-w-7xl text-accent font-heading">
			<h1 className="mb-4 text-4xl font-extrabold text-center lg:text-5xl lg:text-left">Kasper Bø Bjørnø</h1>
			<h2 className="text-3xl font-extrabold text-center lg:text-5xl lg:text-left">Front-end Developer</h2>
			<a
				href="https://www.linkedin.com/in/kasperbb/"
				className="inline-flex items-center gap-4 px-4 py-2 mt-10 text-xl font-semibold leading-relaxed text-white transition duration-500 rounded bg-primary hover:bg-primary-light"
			>
				<ArrowRightIcon className="w-5 h-5" />
				Talk to me
			</a>
			<div className="hidden lg:block">
				<img src="/primary-blob.svg" alt="" className="absolute w-14 h-14 bottom-[200px] right-[350px]" />
				<img src="/accent-blob.svg" alt="" className="absolute w-14 h-14 bottom-0 right-[200px]" />
				<img src="/dots.svg" alt="" className="absolute w-40 h-40 -bottom-10 right-[340px]" />
				<img src="/dots.svg" alt="" className="absolute w-40 h-40 bottom-[100px] right-[100px]" />
			</div>
		</header>
	)
}
