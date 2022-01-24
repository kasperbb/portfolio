import { ContactInformationGrid } from '@components/ContactInformation/ContactInformationGrid'
import { SkillGrid } from '@components/Skill/SkillGrid'
import { ContactInformation as ContactInformationInterface } from 'interfaces/contactInformation'
import { Skills } from 'interfaces/skills'
import { FC } from 'react'

interface LastSectionProps {
	skills: Skills
	contactInformation: ContactInformationInterface
}

export const LastSection: FC<LastSectionProps> = ({ skills, contactInformation }) => {
	return (
		<section className="grid grid-cols-1 gap-16 px-10 mx-auto lg:grid-cols-2 my-36 max-w-7xl" id="contact">
			<div>
				<ContactInformationGrid contactInformation={contactInformation} />
			</div>
			<div>
				<SkillGrid {...skills} />
			</div>
		</section>
	)
}
