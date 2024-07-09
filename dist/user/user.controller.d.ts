import { UserCreaterDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<any[]>;
    Create(user: UserCreaterDto): Promise<any>;
    getUserInfo(userId: Number): string;
    remove(userId: number): string;
}
