import { Item } from './item.entity';
import { ItemRepository } from './item.repository';
import { ItemInput } from './dto/item-input.dto';
export declare class ItemService {
    readonly itemRepo: ItemRepository;
    constructor(itemRepo: ItemRepository);
    createByItemInput(item: ItemInput): Promise<Item>;
    create(item: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOneById(id: number): Promise<Item>;
    item(): Promise<Item>;
}
