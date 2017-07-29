// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">WaggsWorld</Link>
              </div>

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
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>WaggsWorld</strong></h2>
            <h3 className="text-center">The one stop for all things canine.</h3>
          </div>


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
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
