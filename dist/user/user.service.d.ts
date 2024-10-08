import { UserCreaterDto } from "./dtos/create-user-dto";
import { UserRepository } from "./user.repository";
import { UserEntity } from "./entities/user.entity";
export declare class UserService {
    readonly userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findAll(): Promise<UserEntity[]>;
    findOneById(user_id: number): Promise<UserEntity>;
    findOneByEmail(email: string): Promise<UserEntity>;
    createBySignIn(name: string, email: string, password: string): Promise<UserEntity>;
    create(user: UserCreaterDto): Promise<UserEntity>;
    user(): Promise<UserEntity>;
    activeByUserId(user_id: number): Promise<UserEntity>;
    remove(user_id: number): Promise<void>;
}
