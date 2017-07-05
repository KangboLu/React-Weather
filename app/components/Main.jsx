// import modules
var React = require("react");
var Nav = require("Nav");
var Weather = require("Weather");

// main component definition
var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

// exports Main component
module.exports = Main;