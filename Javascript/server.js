const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const app = express();

app.listen(4000, () => {
  console.log("Listening");
});

app.get("/download", (req, res) => {
  const URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4"
  }).pipe(res);
});
