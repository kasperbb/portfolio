import { ContactInformation as ContactInformationInterface } from 'interfaces/contactInformation'
import { FC } from 'react'
import { ContactInformation } from './ContactInformation'

interface ContactInformationGridProps {
	contactInformation: ContactInformationInterface
}

export const ContactInformationGrid: FC<ContactInformationGridProps> = ({ contactInformation: { email, phone, linkedIn, cv } }) => {
	return (
		<>
			<h3 className="text-3xl font-bold lg:text-4xl mb-14 text-accent font-heading">Let's work together!</h3>
			<div className="grid grid-cols-1 lg:max-w-2xl sm:grid-cols-2 gap-14 gap-y-10">
				<ContactInformation {...email} />
				<ContactInformation {...phone} />
				<ContactInformation {...linkedIn} />
				<ContactInformation {...cv} />
			</div>
		</>
	)
}
