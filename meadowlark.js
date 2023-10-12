const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//custom 404 page

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Meadowlark Travel");
});
app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("This will be the About Page. Someday...maybe");
});
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - We've looked, Page not found");
});

//custom 500 page
app.use((req, res) => {
  res.type("text/plain");
  res.status(500);
  res.send("500 - Danger Will Robinson - Internal Server Error");
});

app.listen(port, () => console.log(`Express started on /localhost:$(port)`));
