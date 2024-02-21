import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function getHeader() {
  const header1 = document.getElementById("header1").value;
  return header1;
}

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});