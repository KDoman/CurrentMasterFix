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
    city: {
      type: String,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const User = mongoose.model("User", userSchema);

export default User;
