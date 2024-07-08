import { Repository } from "typeorm";
import { ItemService } from "src/item/item.service";
import { Item } from "./item.entity";

export class ItemRepository extends Repository<Item>{
    
}