// import modules
var React = require("react");

// WeatherMessage component definition
// var WeatherMessage = React.createClass({
//     render: function() {
//         // using destructoring to get props data
//         var {temp, location} = this.props;
        
//         return (
//             <h3>It's {temp} in {location}</h3>
//         );
//     }
// });

// using destructoring to get props data
var WeatherMessage = ({temp, location}) => {
    return (
        <h3>It's {temp} in {location}</h3>
    );
}

// exports WeatherMessage component
module.exports = WeatherMessage