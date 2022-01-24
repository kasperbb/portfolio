import { FC } from 'react'

export const Header = () => {
	return (
		<nav>
			<ul className="flex items-center justify-center gap-12 px-5 py-8 mx-auto text-base font-bold bg-white lg:justify-start max-w-7xl text-accent font-heading">
				<li>
					<NavLink href="#works">Works</NavLink>
				</li>
				<li>
					<NavLink href="#contact">Contact</NavLink>
				</li>
			</ul>
		</nav>
	)
}

const NavLink: FC<{ href: string }> = ({ href, children }) => {
	return (
		<a
			href={href}
			className="relative text-xs uppercase font-bold transition duration-[400ms] text-accent hover:text-primary before:transition-all before:duration-[400ms] before:absolute before:bg-primary before:-bottom-1 before:left-0 before:h-0.5 before:w-0 hover:before:w-full"
		>
			{children}
		</a>
	)
}
