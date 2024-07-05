import { UserCreaterDto } from "./dtos/create-user-dto";
import { Repository } from "typeorm";
import { User } from "./models/user.model";
export declare class UserService {
    private itemRepo;
    constructor(itemRepo: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(): Promise<User>;
    findOneById(user_id: number): Promise<User>;
    create(user: UserCreaterDto): Promise<User>;
    user(): Promise<User>;
}
