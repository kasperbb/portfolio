import { Project } from 'interfaces/project'
import { FC, useEffect, useRef, useState } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'

export const FeaturedProject: FC<Project> = ({ name, url, image, video, type }) => {
	const vidRef = useRef<HTMLVideoElement>(null)
	const [playing, setPlaying] = useState(false)
	const [videoTime, setVideoTime] = useState(0)

	const updateVideoTime = () => {
		if (!vidRef.current) return
		setVideoTime((vidRef.current.currentTime / vidRef.current.duration) * 100)
	}

	const handlePlayVideo = () => {
		vidRef?.current?.play()
		setPlaying(true)
	}

	const handlePauseVideo = () => {
		vidRef?.current?.pause()
		setPlaying(false)
	}

	useEffect(() => {
		if (vidRef.current) {
			vidRef.current.ontimeupdate = () => updateVideoTime()
		}
	}, [vidRef?.current])

	useEffect(() => {
		if (videoTime === 100) setPlaying(false)
	}, [videoTime])

	if (video) {
		return (
			<div className="max-h-[500px] relative col-span-3 rounded overflow-hidden shadow transition group hover:shadow-lg">
				<div className={`transition ${playing ? 'opacity-0' : 'opacity-100'} group-hover:opacity-100`}>
					<div className="absolute z-30 flex items-center justify-center w-full h-full text-white">
						{playing ? (
							<button className="transition hover:scale-105" onClick={handlePauseVideo}>
								<PauseIcon className="w-20 h-20" />
							</button>
						) : (
							<button className="transition hover:scale-105" onClick={handlePlayVideo}>
								<PlayIcon className="w-20 h-20" />
							</button>
						)}
					</div>
					<div className="absolute bottom-0 left-0 z-20 p-6">
						<h3 className="mb-1 text-4xl font-bold leading-tight text-white">{name}</h3>
						<h4 className="font-semibold text-gray-300 uppercase text-md">{type}</h4>
					</div>
					<div className="absolute inset-0 z-10 bg-black opacity-40"></div>
				</div>
				<div
					className="absolute bottom-0 left-0 z-40 h-1 transition-[width,height] ease-linear duration-[300ms,100ms] [animation-fill-mode:both] bg-primary group-hover:h-2"
					style={{ width: `${videoTime}%` }}
				></div>
				<video className="z-10 object-cover w-full h-full" ref={vidRef} muted>
					<source src={video.url} type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
			</div>
		)
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
