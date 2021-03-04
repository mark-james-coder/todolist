const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Do exercise", "Eat breakfast", "Start work"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    nameOfDay: day, newListItems: items
  });

});

app.post("/", (req, res) => {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");

})

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
