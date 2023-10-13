const express = require("express");
const expressHandlebars = require("express-handlebars").engine;
const fortune = require("./lib/fortune");
const handlers = require("./lib/handlers");

const app = express();
//configure handlebars view engine
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

//send requests to handlers. (./lib/handlers.js file now does routing)
app.get("/", handlers.home);
app.get("/about", handlers.about);

//404 and 500 pages
app.use(handlers.notFound);
app.use(handlers.serverError);

//changed this code = not sure exact reason but it may have something to do with testing
if (require.main === module) {
  app.listen(port, () => console.log(`Express started on /localhost:${port}`));
} else {
  module.exports = app;
}
