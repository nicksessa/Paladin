// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.use(express.static('public'))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./landingPage.html"));
});

app.get("/grailQuest", function (req, res) {
    res.sendFile(path.join(__dirname, "./grailQuest.html"));
});

  // If no matching route is found default to home
  
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./landingPage.html"));
  });
}


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
