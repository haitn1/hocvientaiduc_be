import { User } from './models/user.model';
import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    user(): Promise<User>;
}
