import { Repository } from 'typeorm';
import { Item } from './item.entity';
export declare class ItemService {
    private itemRepo;
    constructor(itemRepo: Repository<Item>);
    create(item: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOneById(id: number): Promise<Item>;
    item(): Promise<Item>;
}
