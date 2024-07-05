import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.entity';
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
}