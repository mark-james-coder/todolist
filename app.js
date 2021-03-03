const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    nameOfDay: day
  });

});

app.post("/", (req, res) => {
  console.log(req.body.newItem);
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
