import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './item.entity';
import { ItemRepository } from './item.repository';
import { ItemInput } from './dto/item-input.dto';

@Injectable()
export class ItemService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(Item)
    public readonly itemRepo:ItemRepository,
  ) {}


  async createByItemInput(item: ItemInput): Promise< Item >{
    const i = new Item();
    i.name = item.name;
    i.user_id = item.user_id;
     return await this.itemRepo.save(i);
  }

  async create(item: Item): Promise< Item >{
     return await this.itemRepo.save(item);
  }

  async findAll(): Promise <Item[]> {
    return this.itemRepo.find();
  }

  findOneById(id: number): Promise<Item> {
    return this.itemRepo.findOneBy({id: id});
  }

  item() {
    return this.itemRepo.findOne({});
  }
}