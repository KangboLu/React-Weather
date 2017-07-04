// import modules
var React = require("react");

// WeatherForm component definition
var WeatherForm = React.createClass({
    // handle form submit
    onFormSubmit: function (e) {
        e.preventDefault(); // prevent default reload
        
        // get input data
        var location = this.refs.location.value;
        
        // data validation
        if (location.length > 0) {
            this.refs.location.value = ''; // clear value
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

// exports WeatherForm component
module.exports = WeatherForm;