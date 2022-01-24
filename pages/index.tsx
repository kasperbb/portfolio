import { HeroSection } from '@components/Sections/HeroSection'
import { sanity } from '@lib/sanity'
import { contactInformationQuery, productsQuery, skillsQuery } from '@queries/index'
import { Project } from 'interfaces/project'
import { Skills } from 'interfaces/skills'
import { LastSection } from '@components/Sections/LastSection'
import { ContactInformation, ContactInformationItem } from 'interfaces/contactInformation'
import { ProjectsSection } from '@components/Sections/ProjectsSection'
import { Footer } from '@components/Footer/Footer'

interface IndexProps {
	projects: Project[]
	skills: Skills
	contactInformation: ContactInformation
}

export async function getStaticProps() {
	const projects: Project[] = await sanity.fetch(productsQuery)
	const skills: Skills = await sanity.fetch(skillsQuery)
	const contactInformation: ContactInformationItem[] = await sanity.fetch(contactInformationQuery)

	return {
		props: {
			projects,
			skills,
			contactInformation: contactInformation[0],
		},
	}
}

export default function Index({ projects, skills, contactInformation }: IndexProps) {
	return (
		<>
			<HeroSection />

			<ProjectsSection projects={projects} />

			<LastSection skills={skills} contactInformation={contactInformation} />

			<Footer />
		</>
	)
}
