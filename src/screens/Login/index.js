import React from 'react'
import { Image, Platform } from 'react-native'
import logo from '../../assets/logo.png'

import { Container, Input, Button, TextButton } from './styles'

const Login = () => (
	<Container behavior="padding" enabled={Platform.OS === 'ios'}>
		<Image source={logo} />
		<Input
			autoCapitalize="none"
			autoCorrect={false}
			placeholder="Digite seu usuário no Github"
			placeholderTextColor="#999"
		/>
		<Button>
			<TextButton>Enviar</TextButton>
		</Button>
	</Container>
)

export default Login
