import React from 'react';

import cloudy from '../assets/Cloudy.svg';
import partlyCloudy from '../assets/PartlyCloudy.svg';
import rainy from '../assets/Rainy.svg';
import snowy from '../assets/Snowy.svg';
import sunny from '../assets/Sunny.svg';

const forecastImg = {
	'Cloudy': cloudy,
	'Partly cloudy': partlyCloudy,
	'Rainy': rainy,
	'Snowy': snowy,
	'Sunny': sunny
};

function WeatherCard({ city }) {
	return (
		<div className="card">
			<div className="img-container">
				<img className="card-img-top" src={forecastImg[city.forecast]} alt={city.forecast} id="icon"/>
			</div>
			<div class="card-body">
				<h3 className="card-title">{city.city}</h3>
				<h5 className="card-text">{city.temperature}</h5>
				<h5 className="card-text">{city.forecast}</h5>
			</div>
		</div>
	);
};
	
export default WeatherCard;