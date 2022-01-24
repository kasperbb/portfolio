import { Project as ProjectProps } from 'interfaces/project'
import { FC } from 'react'

export const Project: FC<ProjectProps> = ({ name, url, image, type }) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			className="flex items-center justify-between w-full h-full overflow-hidden transition bg-white rounded shadow text-accent hover:shadow-lg"
		>
			<div className="pt-4 pb-4 pl-6 pr-2">
				<h3 className="mb-1 text-lg font-semibold leading-tight">{name}</h3>
				<h4 className="text-xs font-medium text-gray-400 uppercase">{type}</h4>
			</div>
			<div className="h-full w-48 [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
				<img src={image?.url} alt="" className="object-cover w-full h-full" />
			</div>
		</a>
	)
}
