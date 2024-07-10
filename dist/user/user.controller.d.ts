import { UserCreaterDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    Create(user: UserCreaterDto): Promise<import("./entities/user.entity").UserEntity>;
    getUserInfo(userId: Number): string;
    remove(userId: number): string;
}
