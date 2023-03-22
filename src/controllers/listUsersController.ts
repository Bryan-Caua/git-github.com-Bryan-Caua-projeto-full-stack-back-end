import { Request, Response } from "express";
import listUserServices from "../service/user/listUserService";

const listUserController = async (req: Request, res: Response) => {
  const users = await listUserServices();
  return res.json(users);
};

export { listUserController };
