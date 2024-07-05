import { Resolver,Query, Args, Int } from '@nestjs/graphql';

import { UserService } from './user.service';
import { UsersGuard } from './user.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';

@Resolver(of => User)
export class UserResolver {
    constructor(private userService: UserService) {}
    @Query(() => User)

    @Query(() => [User])
    async users(): Promise<User[]> {
      return await this.userService.findAll(); 
    }

    @Query(() => User)
  async user(@Args('user_id', { type: () => Int }) user_id: number) {
  return this.userService.findOneById(user_id);
}
  
}
