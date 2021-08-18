const express = require("express");
const expHbs = require("express-handlebars");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// db config
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Check http://localhost:8080/api/operations");
});

// Set server to port 8081
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// Static
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Handlebars
app.engine(
  "hbs",
  expHbs({
    defaultLayout: "main.hbs",
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//operation routes
 app.get("/", (req, res) => {
  res.render("operations", {
  });
}); 
require("./routes/operation.routes")(app);


// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
