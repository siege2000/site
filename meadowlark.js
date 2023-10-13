const express = require("express");
const expressHandlebars = require("express-handlebars").engine;

const app = express();
//configure handlebars view engine
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

const port = process.env.PORT || 3000;

//custom 404 page

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

//custom 500 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Danger Will Robinson - Internal Server Error");
});

app.listen(port, () => console.log(`Express started on /localhost:$(port)`));
