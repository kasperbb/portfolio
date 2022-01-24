import { Header } from '@components/Header/Header'
import { FC } from 'react'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
