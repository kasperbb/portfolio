import { ProjectsList } from '@components/Project/ProjectList'
import { Project } from 'interfaces/project'
import { FC } from 'react'

interface ProjectsSectionProps {
	projects: Project[]
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
	return (
		<main className="relative py-20 bg-gray-100 text-accent" id="works">
			<div className="px-5 mx-auto max-w-7xl">
				<div className="items-center justify-between lg:flex mb-14 font-heading">
					<h2 className="text-3xl font-bold text-center lg:text-5xl lg:text-left">What&#39;s Happening?</h2>
					<a
						href="https://github.com/kasperbb"
						className="hidden px-3 py-2 text-sm font-semibold leading-none text-white uppercase transition duration-500 rounded lg:block bg-primary hover:bg-primary-light"
						target="_blank"
						rel="noreferrer noopener"
					>
						See More
					</a>
				</div>
				<ProjectsList projects={projects} />
				<a
					href="https://github.com/kasperbb"
					className="block px-3 py-4 mt-5 font-semibold leading-none text-center text-white uppercase transition duration-500 rounded lg:hidden bg-primary hover:bg-primary-light"
					target="_blank"
					rel="noreferrer noopener"
				>
					See More
				</a>
			</div>
		</main>
	)
}
