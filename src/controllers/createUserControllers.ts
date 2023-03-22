import { Request, Response } from "express";
import { IUser } from "../interfaces";
import createUserService from "../service/user/createUser";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUser = req.body;
  const [status, newUser] = await createUserService(userData);
  return res.status(status as number).json(newUser);
};

export { createUserController };
