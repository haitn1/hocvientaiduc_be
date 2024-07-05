import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(Item)
    private itemRepo: Repository<Item>,
  ) {}


  async create(item: Item): Promise< Item >{
    return this.itemRepo.save(item);
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