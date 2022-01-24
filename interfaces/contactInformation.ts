export interface ContactInformation {
	cv: ContactInformationItem
	email: ContactInformationItem
	linkedIn: ContactInformationItem
	phone: ContactInformationItem
}

export interface ContactInformationItem {
	label: string
	value: string
	url?: string
	file?: any
}
