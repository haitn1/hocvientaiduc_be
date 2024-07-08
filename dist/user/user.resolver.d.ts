import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Item } from 'src/item/item.entity';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<User[]>;
    user(user_id: number): Promise<User>;
    activeByUserId(user_id: number): Promise<User>;
    itemsAdded(user_id: number, name: string): Promise<Item>;
}
