const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//  app. use middleware whenever host/vidoes
app.use("/videos", express.static(path.join(__dirname, "videos")));

app.get("/", () => {
  console.log("We are streaming now");
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
