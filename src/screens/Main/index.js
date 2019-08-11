import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Image, TouchableOpacity } from 'react-native'
import api from '../../services/api'
import {
	Container,
	CardsContainer,
	Card,
	Footer,
	Avatar,
	Name,
	Bio,
	Logo,
	ButtonsContainer,
	Button,
	Empty
} from './styles'
import logo from '../../assets/logo.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'

const Main = ({ navigation }) => {
	const id = navigation.getParam('user')
	const [devs, setDevs] = useState([])

	useEffect(() => {
		const loadusers = async () => {
			const { data } = await api.get('/devs', {
				headers: { user: id }
			})

			setDevs(data)
		}
		loadusers()
	}, [id])

	const handleLike = async () => {
		const [dev, ...rest] = devs

		await api.post(`devs/${dev._id}/likes`, null, {
			headers: {
				user: id
			}
		})
		setDevs(rest)
	}

	const handleDislike = async () => {
		const [dev, ...rest] = devs
		await api.post(`devs/${dev._id}/dislikes`, null, {
			headers: {
				user: id
			}
		})
		setDevs(rest)
	}

	const handleLogout = async () => {
		await AsyncStorage.clear()
		navigation.navigate('Login')
	}

	return (
		<Container>
			<TouchableOpacity onPress={handleLogout}>
				<Logo source={logo} />
			</TouchableOpacity>

			<CardsContainer>
				{devs.length > 0 ? (
					devs.map((dev, index) => (
						<Card key={dev._id} zIndex={devs.length - index}>
							<Avatar
								source={{
									uri: dev.avatar
								}}
							/>
							<Footer>
								<Name>{dev.name}</Name>
								<Bio numberOfLines={3}>{dev.bio}</Bio>
							</Footer>
						</Card>
					))
				) : (
					<Empty>Acabou :(</Empty>
				)}
			</CardsContainer>
			{devs.length > 0 && (
				<ButtonsContainer>
					<Button onPress={handleDislike}>
						<Image source={dislike} />
					</Button>
					<Button onPress={handleLike}>
						<Image source={like} />
					</Button>
				</ButtonsContainer>
			)}
		</Container>
	)
}

export default Main
