import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<any[]>;
    user(user_id: number): Promise<any>;
    activeByUserId(user_id: number): Promise<any>;
}
