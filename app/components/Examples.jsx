// import modules
var React = require("react");
var {Link} = require("react-router");

// Examples component definition
var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center  page-title">Example</h1>
            <p>test out different locations test out different locations</p>
            <ol>
                <li>
                    <Link to='/?location=Chicago'>Chicago</Link>
                    </li>
                <li>
                    <Link to='/?location=Miami'>Miami</Link>
                </li>
            </ol>
        </div>
    );
};

// exports Example component
module.exports = Examples;