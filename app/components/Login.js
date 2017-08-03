// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Login = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function () {

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>Existing User Login Component</h1>
        <form action="/users/login" method="post">
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  } 

});

// Export the module back to the route
module.exports = Login;
