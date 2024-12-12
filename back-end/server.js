import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./models/user.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/signUp", async (req, res) => {
  const user = req.body;

  if (!user.name || !user.surname || !user.city) {
    return res
      .status(400)
      .json({ success: false, message: "Wprowadź wartości do każdego pola" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error("Error in creating user", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at 5000");
});
