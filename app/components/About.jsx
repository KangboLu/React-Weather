// import modules
var React = require("react");

// About component definition
var About = (props) => {
    return (
        <div>
            <h1 className="text-center  page-title">About</h1>
            <p>This is a weather application built on React</p>
            <p>Here are some of the tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map for searching weather by city
                </li>
                <li>
                    <a href="https://github.com/KangboLu/ReactWeather">Github Repo</a> - Source code I uplaoded
                </li>
            </ul>
        </div>
    );
};

// exports About component
module.exports = About;