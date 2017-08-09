// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var mapHelpers = {

  // **** NEW ROUTES ****//
  // This will return any dog friendly bars from our database
  getBars: function(term, start, end) {
    var formattedTerm = term.trim();
    var formattedStart = start.trim();
    var formattedEnd = end.trim();

    console.log(formattedTerm, formattedStart, formattedEnd);

    return axios.get("/api/bars")
      .then(function(results) {
        return results;
      });
  }
};

// We export the helpers function
module.exports = mapHelpers;
