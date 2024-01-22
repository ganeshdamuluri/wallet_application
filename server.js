const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();
const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
  origin: '*',
};

app.options('*', cors());

require("./app/routes/auth.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/wallet.routes")(app);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});