import { UserCreaterDto } from "./dtos/create-user-dto";
import { EntityManager } from 'typeorm';
import { UserEntity } from "./entities/user.entity";
import { Item } from "src/item/item.entity";
import { ItemService } from "src/item/item.service";
import { UserRepository } from "./user.repository";
export declare class UserService {
    readonly userRepo: UserRepository;
    private readonly itemService;
    constructor(userRepo: UserRepository, itemService: ItemService);
    createUserAndProfile(userData: UserEntity, profileData: Item, manager?: EntityManager): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOne(): Promise<UserEntity>;
    findOneById(user_id: number): Promise<UserEntity>;
    findOneByEmail(email: string): Promise<UserEntity>;
    createBySignIn(name: string, email: string, password: string): Promise<UserEntity>;
    create(user: UserCreaterDto): Promise<UserEntity>;
    user(): Promise<UserEntity>;
    activeByUserId(user_id: number): Promise<UserEntity>;
    remove(user_id: number): Promise<void>;
    itemsAdded(user_id: number, name: string): Promise<Item>;
}
