import React from "react";

// This is example of functional component (that doesn't contain state)
// It must have "props" argument to work
// If we have one argument like "props" it doesn't need parenthesis and return statement
const Form = props => (
    <form onSubmit={props.getWeather} className="inputValues">
        <input type="text" name="city" placeholder="Enter City..." />
        <input type="text" name="country" placeholder="Enter Country..." />
        <button>Get Weather</button>
    </form>
);

export default Form;