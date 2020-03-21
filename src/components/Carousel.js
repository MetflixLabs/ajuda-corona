import React from 'react'
import Swiper from 'react-id-swiper';
import Card from '../components/Card'

import 'swiper/css/swiper.css';

export default () => (
	<Swiper>
		<Card
			title={confirmedCases}
			description="Casos no Brasil"
			isInfo
		></Card>
		<Card
			title={moment().diff('2020-03-21', 'hours')}
			description="Horas online"
			isInfo
		></Card>
	</Swiper>
)