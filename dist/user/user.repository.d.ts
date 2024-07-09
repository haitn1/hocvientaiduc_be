import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserCreaterDto } from "./dtos/create-user-dto";
export declare class UserRepository extends Repository<UserEntity> {
    createBySignIn(name: string, email: string, password: string): Promise<UserEntity>;
    createUser(user: UserCreaterDto): Promise<UserEntity>;
    activeByUserId(user_id: number): Promise<UserEntity>;
    removeUser(user_id: number): Promise<void>;
}
