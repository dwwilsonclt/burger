var express = require("express"); 

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//PARAMS FOR CREATE BELOW:
// orm.create  -  create: function(table, cols, vals, cb)

//burger.js:
  // create: function(cols, vals, cb) {
    // orm.create("burgers", cols, vals, function(res)

router.post("/", function(req, res) {
  console.log("POST PARAMS: %s",req.body.burger)
  burger.create([
    "burger_name"
  ], [
    req.body.burger
  ], function() {
    res.redirect("/");
  });
});

//PARAMS FOR UPDATE BELOW:
// burger.js - update: function(objColVals, condition, cb)
 // orm.js - update: function(table, objColVals, condition, cb)
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({devoured: true}, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;