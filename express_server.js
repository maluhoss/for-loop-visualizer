let express = require("express");
let app = express();
let PORT = 8080;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})