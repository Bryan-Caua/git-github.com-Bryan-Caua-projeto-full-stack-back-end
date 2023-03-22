import { Request, Response } from "express";
import deleteUserService from "../service/user/deleteUser";

const deleteUserController = async (req: Request, res: Response) => {
  const deleteUser = await deleteUserService(req.params.id);
  return res.status(204).json(deleteUser);
};
export default deleteUserController;
