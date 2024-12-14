import cors from "cors";
import express from "express";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./models/user.model.js";
import { generateTokenAndCookie } from "./helpers/generateTokenAndCookie.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["*"],
    credentials: true,
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/signUp", async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({
      success: false,
      message: "Login oraz hasło nie mogą pozostać puste!",
    });
  }
  try {
    const userAlreadyExist = await User.findOne({ login });
    if (userAlreadyExist)
      return res
        .status(400)
        .json({ success: false, message: "Taki użytkownik już istnieje" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = new User({ login, password: hashedPassword });

  try {
    await newUser.save();

    generateTokenAndCookie(res, newUser._id);

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error in creating user", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Błąd podczas pobierania danych użytkowników z bazdy danych",
    });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const targetUser = await User.findByIdAndDelete(id);
    if (!targetUser) throw new Error();
    res
      .status(200)
      .json({ success: true, message: "Użytkownik został usunięty" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Użytkownik nie został znaleziony w bazie danych",
    });
  }
});

app.patch("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (!updatedUser) throw new Error();
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Zmiana danych użytkownika nie powiodła się",
    });
  }
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ status: true, message: "Pomyślne wylogowanie" });
});

app.post("/api/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ login });
    if (!user) throw new Error("Nieprawidłowe dane logowania");

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Nieprawidłowe dane logowania");

    generateTokenAndCookie(res, user._id);

    res.status(200).json({
      success: true,
      message: "Pomyślnie zalogowano",
    });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  connectDB();
});
