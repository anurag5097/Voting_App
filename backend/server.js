import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import connectDB from "./config/db.js"

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.yellowBright.bold(
      `Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`
    )
  );
});