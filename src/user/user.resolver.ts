import { Resolver,Query, Args, Int, Mutation, Subscription } from '@nestjs/graphql';

import { UserService } from './user.service';

import { User } from './shemas/user.schema';

@Resolver(() => User)
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


}
