import { Item } from './item.entity';
import { ItemRepository } from './item.repository';
export declare class ItemService {
    readonly itemRepo: ItemRepository;
    constructor(itemRepo: ItemRepository);
    create(item: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOneById(id: number): Promise<Item>;
    item(): Promise<Item>;
}
