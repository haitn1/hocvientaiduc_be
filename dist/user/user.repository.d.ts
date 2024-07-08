import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ItemService } from "src/item/item.service";
export declare class UserRepository extends Repository<User> {
    itemService: ItemService;
}
