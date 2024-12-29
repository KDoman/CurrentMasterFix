import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    isSpecialist: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    rating: [
      {
        userId: { type: String },
        name: { type: String },
        mark: { type: Number },
        message: { type: String },
      },
    ],
    labels: [
      {
        type: String,
      },
    ],
    professions: [
      {
        type: String,
      },
    ],
    aboutMe: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
