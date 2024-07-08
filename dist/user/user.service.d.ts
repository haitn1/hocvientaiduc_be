import { UserCreaterDto } from "./dtos/create-user-dto";
import { User } from "./entities/user.entity";
import { Item } from "src/item/item.entity";
import { ItemService } from "src/item/item.service";
import { UserRepository } from "./user.repository";
export declare class UserService {
    readonly userRepo: UserRepository;
    private readonly itemService;
    constructor(userRepo: UserRepository, itemService: ItemService);
    findAll(): Promise<User[]>;
    findOne(): Promise<User>;
    findOneById(user_id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    createBySignIn(name: string, email: string, password: string): Promise<User>;
    create(user: UserCreaterDto): Promise<User>;
    user(): Promise<User>;
    activeByUserId(user_id: number): Promise<User>;
    remove(user_id: number): Promise<void>;
    itemsAdded(user_id: number, name: string): Promise<Item>;
}
