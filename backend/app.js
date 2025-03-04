// const express = require("express");
// const cors = require("cors");

// const postRouter = require("./routers/postsRouter");

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// app.use("/api/posts", postRouter);

// app.get("/", (req, res) => {
//     res.send("Home");
// });

// app.use((req, res, next) => {
//     res.status(404).json({ error: "Not Found" });
// });

// app.listen(PORT, () => {
//     console.log(`Server avviato su http://localhost:${PORT}`);
// });