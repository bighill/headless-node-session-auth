import { model, Schema, Model, Document } from "mongoose";

interface UserType extends Document {
  _id?: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

export const User: Model<UserType> = model("users", UserSchema);
