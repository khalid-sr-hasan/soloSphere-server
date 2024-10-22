const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

// check the server
app.get("/", (req, res) => {
    res.send("soloSphere server is running");
});

app.listen(port, () => {
    console.log("server is running PORT:", port);
});
