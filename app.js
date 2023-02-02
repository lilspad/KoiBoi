const cool = require('cool-ascii-faces');
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is ready to listen on port ${PORT}`);
});

app.use(express.static(__dirname));

app.get('/cool', (req, res) => res.send(cool()))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});