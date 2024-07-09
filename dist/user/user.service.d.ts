import { UserCreaterDto } from "./dtos/create-user-dto";
import { UserRepository } from "./user.repository";
import { UserEntity } from "./entities/user.entity";
export declare class UserService {
    readonly userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    findAll(): Promise<any[]>;
    findOne(): Promise<any>;
    findOneById(user_id: number): Promise<any>;
    findOneByEmail(email: string): Promise<any>;
    createBySignIn(name: string, email: string, password: string): Promise<any>;
    create(user: UserCreaterDto): Promise<any>;
    user(): Promise<UserEntity>;
    activeByUserId(user_id: number): Promise<any>;
    remove(user_id: number): Promise<void>;
}
