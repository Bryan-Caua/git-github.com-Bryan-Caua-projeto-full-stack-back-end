import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";


const listUserServices = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users;
};

export default listUserServices;
