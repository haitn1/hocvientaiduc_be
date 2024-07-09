import { UserService } from './user.service';
import { Item } from 'src/item/item.entity';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<any[]>;
    user(user_id: number): Promise<import("./entities/user.entity").UserEntity>;
    activeByUserId(user_id: number): Promise<import("./entities/user.entity").UserEntity>;
    itemsAdded(user_id: number, name: string): Promise<Item>;
}
