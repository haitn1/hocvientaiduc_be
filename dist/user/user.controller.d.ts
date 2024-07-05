import { UserCreaterDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./models/user.model").User[]>;
    Create(user: UserCreaterDto): Promise<import("./models/user.model").User>;
    getUserInfo(userId: Number): string;
    remove(userId: number): string;
}
