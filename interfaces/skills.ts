import { Image } from './image'

export interface Skills {
	proficient: Skill[]
	comfortable: Skill[]
	exploring: Skill[]
}

export interface Skill {
	_id: string
	name: string
	abbreviation?: string
	skill_level: string
	url: string
	image: Image
}
