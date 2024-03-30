import express from "express";
import user from "./routes/user.js";
import auth from "./routes/auth.js";
import post from "./routes/post.js";
import cookieParser from "cookie-parser";

const app = express();

const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/post", post);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
