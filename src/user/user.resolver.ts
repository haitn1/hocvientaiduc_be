import { Resolver,Query, Args, Int, Mutation, Subscription } from '@nestjs/graphql';

import { UserService } from './user.service';
import { UsersGuard } from './user.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';

import { Item } from 'src/item/item.entity';
import { ItemInput } from 'src/item/dto/item-input.dto';
import { User } from './shemas/user.schema';

@Resolver(of => User)
export class UserResolver {
    constructor(private userService: UserService) {}
    @Query(() => User)

    @Query(() => [User])
    async users(): Promise<any[]> {
      return await this.userService.findAll(); 
    }

    @Query(() => User)
    async user(@Args('user_id', { type: () => Int }) user_id: number) {
      return this.userService.findOneById(user_id);
    }
  
    @Mutation(() => User)
    async activeByUserId(@Args({ name: 'user_id', type: () => Int }) user_id: number) {
      return this.userService.activeByUserId( user_id );
    }

    @Subscription(() => Item)
    async itemsAdded(@Args('user_id', { type: () => Int }) user_id: number,
    @Args('name', { type: () => String }) name: string) {
      return this.userService.itemsAdded(user_id,name);
   
    }

}
