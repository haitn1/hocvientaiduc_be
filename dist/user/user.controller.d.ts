import { UserCreaterDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    Create(user: UserCreaterDto): Promise<User>;
    getUserInfo(userId: Number): string;
    remove(userId: number): string;
}
