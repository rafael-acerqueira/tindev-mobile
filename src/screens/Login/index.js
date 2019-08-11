import React, { useState, useEffect } from 'react'
import { Image, Platform } from 'react-native'
import logo from '../../assets/logo.png'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Input, Button, TextButton } from './styles'

const Login = ({ navigation }) => {
	const [username, setUsername] = useState('')

	useEffect(() => {
		const getUsers = () => {
			const user = AsyncStorage.getItem('user')
			if (user) {
				navigation.navigate('Main', { user })
			}
		}
		getUsers()
	}, [])

	const handleLogin = async () => {
		const { data } = await api.post('devs', { username })

		const { _id } = data

		await AsyncStorage.setItem('user', _id)

		navigation.navigate('Main', { user: _id })
	}

	return (
		<Container behavior="padding" enabled={Platform.OS === 'ios'}>
			<Image source={logo} />
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Digite seu usuário no Github"
				placeholderTextColor="#999"
				value={username}
				onChangeText={setUsername}
			/>
			<Button onPress={handleLogin}>
				<TextButton>Enviar</TextButton>
			</Button>
		</Container>
	)
}

export default Login
