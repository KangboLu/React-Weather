// import modules
var React = require("react")

// Examples component definition
var Examples = React.createClass({
    render: function() {
        return (
            <h3>Example component</h3>
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