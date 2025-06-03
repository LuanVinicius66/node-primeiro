import { User } from "../types/user";

export const findUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email === "admin@gmail.com" && password === "1234") {
    const user: User = {
      id: "2",
      name: "Luan",
    };
    return user;
  }
  return null;
};

export const createUserToken = (user: User) => {
  return "1234";
};
