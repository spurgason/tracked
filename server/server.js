const express = require("express");
const connectDB = require("./config/connection");
const routes = require("./routes");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3001;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
