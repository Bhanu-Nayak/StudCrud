const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require("./myRouter/myRouter");
const cors = require("cors");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.use("/", router);

const port = 3010;
app.listen(port, (err) => {
  if (!err) {
    console.log("server started", port);
  } else {
    console.log("not running");
  }
});
