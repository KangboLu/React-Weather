// import modules
var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

// Weather component definition
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  // handle weather search from location input
  handleSearch: function(location) {
    var that = this;
    
    debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false})
      alert(errorMessage);
      // for bad response
      that.setState({
        location: location,
        temp: 'Unknown'
      });
    });
  },
  render: function() {
    // using destructoring to get temp and location
    var {isLoading, temp, location} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

// exports Weather component
module.exports = Weather;