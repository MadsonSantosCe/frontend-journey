import { User } from "@/type/User";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const UsersRepository = {
  async fetchUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(`${API_URL}/Users`);
    return response.data;
  },
};
