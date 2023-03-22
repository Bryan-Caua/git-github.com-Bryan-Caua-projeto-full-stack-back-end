import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { appError } from "../../errors/appErros";
import { IUserUpdate } from "../../interfaces/index";

const updateUserService = async (
  userData: IUserUpdate,
  userID: string,
) => {
  if (Object.keys(userData).length === 0) {
    throw new appError("campo nao pode ser alterado", 401);
  }
  const { name, email } = userData;

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userID });
  if (!findUser) {
    throw new appError("Id não encontrado", 404);
  }

  const updateUser = userRepository.create({
    ...findUser,
    name: name || findUser.name,
    email: email || findUser.email,
    cellphone: cellphone || findUser.cellphone,
  });
  await userRepository.save(updateUser);

  return updateUser;
};

export default updateUserService;
