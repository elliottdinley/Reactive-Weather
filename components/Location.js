import React from 'react';

import cloudy from '../assets/Cloudy.svg';
import partlyCloudy from '../assets/PartlyCloudy.svg';
import rainy from '../assets/Rainy.svg';
import snowy from '../assets/Snowy.svg';
import sunny from '../assets/Sunny.svg';

import error from '../assets/Error.svg';

const forecastImg = {
	'Cloudy': cloudy,
	'Partly cloudy': partlyCloudy,
	'Rainy': rainy,
	'Snowy': snowy,
	'Sunny': sunny,
    'Error': error
};

function Location(props) {
    const city = props.data.find(item => item.city === props.location);

    return (
        <div className="card">
            <h3>{city ? `Current Location: ${city.city}` : 'Unknown Location'}</h3>
            <br />
            <div className="img-container">
                <img
                    className="card-img-top"
                    src={city ? forecastImg[city.forecast] : forecastImg['Error']}
                    alt={city ? city.forecast : 'Location Not Found'}
                    id="icon"
                />
            </div>
            <div class="card-body">
                {city ? (
                    <>
                        <h3 className="card-title">{city.city}</h3>
                        <h5 className="card-text">{city.temperature}</h5>
                        <h5 className="card-text">{city.forecast}</h5>
                    </>
                ) : <h3>Location not found</h3>}
            </div>
        </div>
    );
};
	
export default Location;