import { Image } from './image'

export interface Project {
	_id: string
	name: string
	url: string
	type: string | null
	featured: boolean | null
	image: Image
}
