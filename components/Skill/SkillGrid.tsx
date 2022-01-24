import { Skill as SkillInterface } from 'interfaces/skills'
import { FC } from 'react'
import { Skill } from './Skill'

interface SkillGridProps {
	proficient: SkillInterface[]
	comfortable: SkillInterface[]
	exploring: SkillInterface[]
}

export const SkillGrid: FC<SkillGridProps> = ({ proficient, comfortable, exploring }) => {
	return (
		<>
			<h3 className="text-3xl font-bold lg:text-4xl mb-14 text-accent font-heading">My skills</h3>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
				{proficient.map(item => (
					<Skill {...item} key={item._id} />
				))}
				{comfortable.map(item => (
					<Skill {...item} key={item._id} />
				))}
				{exploring.map(item => (
					<Skill {...item} key={item._id} />
				))}
			</div>
		</>
	)
}
