import cookieParser from "cookie-parser";
import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
