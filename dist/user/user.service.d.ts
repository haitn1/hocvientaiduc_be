import { User } from "./entities/user.entity";
import { UserCreaterDto } from "./dtos/create-user-dto";
import { DataSource } from "typeorm";
export declare class UserService {
    private dataSource;
    constructor(dataSource: DataSource);
    findAll(): Promise<User[]>;
    create(user: UserCreaterDto): Promise<User>;
}
