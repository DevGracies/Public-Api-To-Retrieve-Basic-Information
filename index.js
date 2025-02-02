require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.get("/api/information", (req, res) => {
  const response = {
    email: process.env.EMAIL,
    current_datetime: new Date().toISOString(),
    github_url: process.env.github_url,
  };
  res.json(response);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
console.log(new Date());
console.log(new Date().toISOString());
