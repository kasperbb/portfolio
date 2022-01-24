import { Project as ProjectInterface } from 'interfaces/project'
import { FC } from 'react'
import { FeaturedProject } from './FeaturedProject'
import { Project } from './Project'

interface ProjectListProps {
	projects: ProjectInterface[]
}

export const ProjectsList: FC<ProjectListProps> = ({ projects }) => {
	const featured = projects.find(project => project.featured)
	const filtered = projects.filter(project => project._id !== featured?._id)

	return (
		<div className="grid grid-cols-3 gap-6 lg:grid-cols-5">
			{featured && <FeaturedProject {...featured} />}
			<ul className="grid col-span-3 gap-3 lg:col-span-2">
				{filtered.map(project => (
					<li key={project._id}>
						<Project {...project} />
					</li>
				))}
			</ul>
		</div>
	)
}
