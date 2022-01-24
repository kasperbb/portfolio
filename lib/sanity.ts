import sanityClient from '@sanity/client'

export const sanity = sanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: process.env.SANITY_API_VERSION,
	token: process.env.SANITY_TOKEN || '',
	useCdn: process.env.SANITY_USE_CDN === 'true',
})
