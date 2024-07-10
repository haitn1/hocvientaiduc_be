import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<import("./entities/user.entity").UserEntity[]>;
    user(user_id: number): Promise<import("./entities/user.entity").UserEntity>;
    activeByUserId(user_id: number): Promise<import("./entities/user.entity").UserEntity>;
}
