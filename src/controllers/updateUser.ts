import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/index";
import updateUserService from "../service/user/updateUser";

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userID = req.params.id;
  const updatedUser = await updateUserService(userData, userID);
  return res.json(updatedUser);
};

export default updateUserController;
