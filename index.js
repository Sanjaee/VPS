const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running successfully!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
