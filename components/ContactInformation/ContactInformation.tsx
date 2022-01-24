import { ContactInformationItem } from 'interfaces/contactInformation'
import { FC } from 'react'

export const ContactInformation: FC<ContactInformationItem> = ({ label, value, url, file }) => {
	return (
		<div>
			<p className="text-xs text-[#94929D] mb-[20px]">{label}</p>
			<a
				href={url || file}
				target="_blank"
				rel="noreferrer noopener"
				className="relative text-sm font-bold transition duration-[400ms] text-accent hover:text-primary before:transition-all before:duration-[400ms] before:absolute before:bg-primary before:-bottom-1 before:left-0 before:h-0.5 before:w-0 hover:before:w-full"
			>
				{value}
			</a>
		</div>
	)
}
