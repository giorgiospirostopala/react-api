const express = require("express");
const cors = require("cors");
const posts = require("./posts");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});