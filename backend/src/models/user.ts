import mongoose from "mongoose";

interface UserType extends mongoose.Document {
  _id?: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

export const User = mongoose.model<UserType>("users", UserSchema);
