const express = require("express");
const app = express();
const routes = require('./api')
const port = 5000;

app.use('/api/v1', routes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port- ${port} !`));
