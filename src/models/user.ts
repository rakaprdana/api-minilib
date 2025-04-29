import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

export const User = model<IUser>("User", userSchema);
