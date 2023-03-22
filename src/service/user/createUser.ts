import { IUser } from "../../interfaces/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { appError } from "../../errors/appErros";

const createUserService = async (
  userData: IUser
): Promise<Array<User | number | string | {}>> => {
  const userRepository = AppDataSource.getRepository(User);
  const validationEmail = await userRepository.findOneBy({
    email: userData.email,
  });
  if (validationEmail) {
    throw new appError("Email already exist", 409);
  }
  const user = userRepository.create(userData);
  await userRepository.save(user);

  return [201, user];
};

export default createUserService;
