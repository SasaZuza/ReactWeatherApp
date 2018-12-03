import React from "react";

// This is example of functional component (that doesn't contain state)
// It must have "props" argument to work
// If we have one argument like "props" it doesn't need parenthesis and return statement
const Weather = props => (
    <div className="weather__info">
        {/* If all conditions are tru we render this <p> */}

        {
            props.city && props.country && <p className="weather__key"> City/Country:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }

        {
            props.temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> {props.temperature} °C </span>
            </p>
        }

        {
            props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> {props.humidity} % </span>
            </p>
        }

        {
            props.wind && <p className="weather__key"> Wind speed:
	 		<span className="weather__value"> {props.wind} </span>
            </p>
        }

        {
            props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
            </p>
        }

        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

export default Weather;