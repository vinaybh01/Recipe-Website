import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

dotenv.config();

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
// }

app.listen(process.env.PORT || 3001, () => console.log("Server started"));
