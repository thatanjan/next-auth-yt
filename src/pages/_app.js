import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, Grid } from '@chakra-ui/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<ChakraProvider>
				<Grid
					sx={{
						h: '100vh',
						placeItems: 'center',
						px: '5rem',
						textAlign: 'center',
					}}
				>
					<Component {...pageProps} />
				</Grid>
			</ChakraProvider>
		</SessionProvider>
	)
}

export default MyApp
