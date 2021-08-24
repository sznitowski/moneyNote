const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// db config
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Check http://localhost:8080/api/operations");
});

app.use(cors());

// Static
app.use(express.static(path.join(__dirname, "public")));
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());


//operation routes
   app.get("/", (req, res) => {
  res.redirect("operations", {
  });
}); 
require("./routes/operation.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});