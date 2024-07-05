import { Resolver,Query, Args } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { UsersGuard } from './user.guard';
import { ParseIntPipe, UseGuards } from '@nestjs/common';

@Resolver(of => User)
export class UserResolver {
    constructor(private userService: UserService) {}
    @Query(returns => User)
    async user(): Promise<User> {
      return this.userService.findOne(); // Vì ta đang bắt kiểu là object nên việc string sẽ bị lỗi, vì vậy tạm thời để null
    }
  
}
