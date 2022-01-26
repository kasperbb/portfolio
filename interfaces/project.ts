import { Image } from './image'
import { Video } from './video'

export interface Project {
	_id: string
	name: string
	url: string
	type: string | null
	featured: boolean | null
	image: Image
	video?: Video
}
