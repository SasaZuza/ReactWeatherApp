import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "c0364be54edc84ce5682c6e620e2519c";

class App extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        icon: undefined,
        error: undefined
    }
    // create state and set up it's initial value

    getWeather = async (e) => {
        e.preventDefault();
        // Prevents default behaviour of page (refresh after clicking submit button)

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        // Creating const to store value from "Form" component 

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();      // converts api call to JSON format

        // If city and country is entered correctly as value render code bellow
        if (data.cod == 404) {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                wind: undefined,
                description: undefined,
                error: "Please make sure you entered valid values for city and state (ex. Sarajevo/BA, New York/US, London/UK ... ).",
            });
        } else if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                wind: undefined,
                description: undefined,
                error: "Please enter valid values for city and state. (ex. Sarajevo/BA, New York/US, London/UK ... )"
            });
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">

                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>

                                <div className="col-xs-7 form-container">

                                    <Form getWeather={this.getWeather} />
                                    {/* Creates props for this component so we can acces form inside of it */}

                                    <Weather
                                        temperature={this.state.temperature}
                                        humidity={this.state.humidity}
                                        city={this.state.city}
                                        country={this.state.country}
                                        wind={this.state.wind}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                    {/* Creating props for Weather component and callsing values from state */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;