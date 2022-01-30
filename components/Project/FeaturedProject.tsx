import { Project } from 'interfaces/project'
import { FC } from 'react'
import { Video } from '@components/Video/Video'

export const FeaturedProject: FC<Project> = ({ name, url, image, video, type }) => {
	if (video) {
		return <Video title={name} subtitle={type} videoUrl={video.url} projectUrl={url} />
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			className="max-h-[500px] relative col-span-3 rounded overflow-hidden shadow transition group hover:shadow-lg"
		>
			<div className="absolute bottom-0 left-0 z-20 p-6">
				<h3 className="mb-1 text-4xl font-bold leading-tight text-white">{name}</h3>
				<h4 className="font-semibold text-gray-300 uppercase text-md">{type}</h4>
			</div>
			<div className="absolute inset-0 z-10 overlay-gradient"></div>
			<img src={image?.url} alt="" className="object-cover z-0 w-full h-full transition duration-700 group-hover:scale-[1.175] group-hover:rotate-6" />
		</a>
	)
}
