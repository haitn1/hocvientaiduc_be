import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.entity';
import { ItemInput } from './dto/item-input.dto';
const pubSub = new PubSub();
@Resolver(()=>Item)
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query('items')
  async items(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Query('item')
  async item(): Promise<Item> {
    return this.itemService.item();
  }
/*
  @Mutation(() => Item)
  async createItem(@Args('item') item: Item) : Promise<Item>  {

    return this.itemService.create(item);
 
  }
*/
}