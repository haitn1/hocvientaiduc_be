import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { ItemService } from "src/item/item.service";
export declare class UserRepository extends Repository<UserEntity> {
    itemService: ItemService;
}
