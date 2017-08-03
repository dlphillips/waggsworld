// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function () {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                {/* Using <Link> in place of <a> and "to" in place of "href" */}
                {/*<li><Link to="/search">Search</Link></li> */}
                {/*<li><Link to="/saved">Saved Articles</Link></li> */}
                <li><Link to="/dogmap">DogMap</Link></li>
                <li><Link to="/dogdate">DogDate</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/breeding">Breeding</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </nav>

          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              Copyright 2017 Team Fuji
            </p>
          </footer>
        </div>
      </div >
    );
  }
});

// Export the module back to the route
module.exports = Main;
