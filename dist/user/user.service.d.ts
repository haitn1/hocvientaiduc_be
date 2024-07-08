import { UserCreaterDto } from "./dtos/create-user-dto";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";
export declare class UserService {
    readonly userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findAll(): Promise<User[]>;
    findOne(): Promise<User>;
    findOneById(user_id: number): Promise<User>;
    create(user: UserCreaterDto): Promise<User>;
    user(): Promise<User>;
    activeByUserId(user_id: number): Promise<User>;
    remove(user_id: number): Promise<void>;
}
