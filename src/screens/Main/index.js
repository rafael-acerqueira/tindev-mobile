import React from 'react'
import { Image } from 'react-native'
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
	Button
} from './styles'
import logo from '../../assets/logo.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'

const Main = () => (
	<Container>
		<Logo source={logo} />
		<CardsContainer>
			<Card zIndex={3}>
				<Avatar
					source={{
						uri: 'https://avatars2.githubusercontent.com/u/9022148?v=4'
					}}
				/>
				<Footer>
					<Name>Rafael</Name>
					<Bio numberOfLines={3}> Pessoal legal</Bio>
				</Footer>
			</Card>

			<Card zIndex={2}>
				<Avatar
					source={{
						uri: 'https://avatars2.githubusercontent.com/u/9022148?v=4'
					}}
				/>
				<Footer>
					<Name>Rafael</Name>
					<Bio numberOfLines={3}>
						al legal dlsldoal dlaosldasol doaldaodl dlasoasl daosdlaod al legal
						dlsldoal dlaosldasol doaldaodl dlasoasl daosdlaod al legal dlsldoal
						dlaosldasol doaldaodl dlasoasl daosdlaod al legal dlsldoal
						dlaosldasol doaldaodl dlasoasl daosdlaod
					</Bio>
				</Footer>
			</Card>
		</CardsContainer>
		<ButtonsContainer>
			<Button>
				<Image source={dislike} />
			</Button>
			<Button>
				<Image source={like} />
			</Button>
		</ButtonsContainer>
	</Container>
)

export default Main
