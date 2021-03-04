const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Do exercise", "Eat breakfast", "Start work"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {

  let day = date();

  res.render("list", {
    nameOfDay: day, newListItems: items
  });

});

app.post("/", (req, res) => {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");

})

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
