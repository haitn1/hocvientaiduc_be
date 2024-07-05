import { ItemService } from './item.service';
import { Item } from './item.entity';
export declare class ItemResolver {
    private itemService;
    constructor(itemService: ItemService);
    items(): Promise<Item[]>;
    item(): Promise<Item>;
}
