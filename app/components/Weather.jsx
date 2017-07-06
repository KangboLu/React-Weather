// import modules
var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal")

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
    
    // debugger;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

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
        temp: 'Unknown',
        errorMessage: errorMessage.message
      });
    });
  },
  render: function() {
    // using destructoring to get temp and location
    var {isLoading, temp, location, errorMessage} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal errorMessage={errorMessage}/>
        );
      }
    }
    
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

// exports Weather component
module.exports = Weather;