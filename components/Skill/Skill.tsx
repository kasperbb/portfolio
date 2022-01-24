import { Skill as SkillInterface } from 'interfaces/skills'
import { FC } from 'react'

export const Skill: FC<SkillInterface> = ({ name, abbreviation, url, image }) => {
	const label = name.length >= 16 ? abbreviation : name
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer noopener"
			className="flex overflow-hidden transition bg-white rounded shadow cursor-pointer hover:shadow-lg"
		>
			<div className="flex items-center justify-center w-10 pl-1">
				<img src={image?.url} alt="" className="w-6" />
			</div>
			<div className="w-full p-2 ml-1 text-sm font-medium">{label}</div>
		</a>
	)
}
