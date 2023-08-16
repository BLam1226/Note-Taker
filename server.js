// Importing express and setting up the server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// requiring the routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// starting the server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
