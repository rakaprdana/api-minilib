import { IUser } from "../interfaces/user";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";
export class AuthService {
  static signUp = async (data: IUser) => {
    const { name, email, password } = data;
    const userIsExist = await User.findOne({ email });
    if (userIsExist) {
      return { error: "USER_EXIST", userIsExist };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return { error: "CREATED_FAILED" };
    }

    return {
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser.id),
    };
  };
  static signIn = async (data: IUser) => {
    const { email, password } = data;
    const user = await User.findOne({ email });

    if (!user || !user.password) return { error: "INVALID_SIGNIN" };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "INVALID_PASSWORD" };

    return {
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    };
  };
}
