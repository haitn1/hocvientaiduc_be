import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    user(user_id: number): Promise<User>;
}
