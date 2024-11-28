import { UsersRepository } from "@/repositories/usersRepository"

export const UsersService = {
    async getUsers(){
        return await UsersRepository.fetchUsers();
    },
};