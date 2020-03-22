import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { sizes } from '../components/utils/media';

import Card from '../components/Card'

const breakpoints = () => {
	const breakpoints = []
	for (let b in sizes) {
		breakpoints.push(sizes[b][1])
	}
	return breakpoints
}

export default ({ data }) => {
	const { confirmedCases, hours } = data

	const params = {
		slidesPerView: 2,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
	}

	return (
		<Swiper {...params}>
			<Card
				title={confirmedCases}
				description="Casos no Brasil"
				isInfo
			/>
			<Card
				title={hours}
				description="Horas online"
				isInfo
			/>
			<Card
				title={'344'}
				description="Máscaras garantidas"
				isInfo
			/>
			<Card
				title={'5L'}
				description="De álcool gel"
				isInfo
			/>
		</Swiper>
	)
}