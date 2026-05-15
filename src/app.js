import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import articleRouter from "./routes/articleRouter.js";
import commentRouter from "./routes/commentRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/products", productRouter);
app.use("/articles", articleRouter);
app.use("/comments", commentRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
