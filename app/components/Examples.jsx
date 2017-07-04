// import modules
var React = require("react")

// Examples component definition
var Examples = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Example</h3>
                <p>Welcome to Examples page!</p>
            </div>
        );
    }
});

var Examples = (props) => {
    return (
        <h3>Example component</h3>
    );
};

// exports Example component
module.exports = Examples;