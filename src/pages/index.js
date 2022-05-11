import React from 'react'
import { useRouter } from 'next/router'
import { Heading, Button, Grid } from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home = () => {
	const { data: session } = useSession()

	const { push, asPath } = useRouter()

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/some' })

		push(data.url)
	}

	const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`)

	return (
		<Grid placeItems='center' gridRowGap='1rem'>
			{session ? (
				<>
					<Heading>Signed in as {session.user.email}</Heading>
					<Button onClick={handleSignOut}>Sign out</Button>
				</>
			) : (
				<>
					<Heading>You are not signed in</Heading>

					<Button onClick={handleSignIn}>Sign in</Button>
				</>
			)}
		</Grid>
	)
}

export default Home
