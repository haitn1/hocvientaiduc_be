import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ItemService } from "src/item/item.service";

export class UserRepository extends Repository<User>{
    public itemService: ItemService;
}