const express = require("express");
const app = express();

// 挂载路由  这种方法用的少
app.get("/", (req, res) => {
  res.send("dyc");
});
app.post("/", (req, res) => {
  res.send("zyq");
});

app.listen(80, () => {
  console.log("running at http://127.0.0.1");
});
