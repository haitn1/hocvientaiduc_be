
import { DeepPartial, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { ItemService } from "src/item/item.service";

export class UserRepository extends Repository<UserEntity>{
    public itemService: ItemService;
        
    
}