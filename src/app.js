const express = require("express");
require("dotenv").config();
require("./db/db-config").connect();
const cors = require("cors");
const app = express();
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
app.use(cors());
app.use(express.json());

app.use('/', require("./routes/product"));

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`)
});
module.exports = app;