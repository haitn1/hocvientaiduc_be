import { Controller, Res, Get, Redirect, Param, ParseIntPipe, Post, Req, Body, Query, Put , Delete, HttpCode, HttpStatus, HttpException, UseGuards, UseInterceptors, DefaultValuePipe} from '@nestjs/common';
import IUserRequest from './interfaces/user-request.interface';
import { UserInfoResponseDto } from './dtos/user-info.dto';
import { Request, query } from 'express';
import { UserCreaterDto } from './dtos/create-user-dto';
import { Response } from 'express';
import { UserService } from './user.service';
import { IUser } from 'src/user/interfaces/user.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entities/user.entity';
import { LoggerInterceptor } from 'src/core/interceptors/logging.interceptor';
@Controller('users')
//@UseGuards(AuthGuard)
//@UseInterceptors(LoggerInterceptor)
export class UserController {
    constructor(private userService : UserService){}
    @Get()
    async findAll() {
        console.log('UserController findAll .....');
        const users = this.userService.findAll();
        console.log(`UserController findAll users [${(await users).length}]`);
        return users;
    }

    @Post()
    async Create(@Body() user : UserCreaterDto){
      await console.log(`UserController API create new user [#${JSON.stringify( user)}] `);
       return await this.userService.create(user);
    }

   
    @Get(':userId')
    getUserInfo(
        @Param('userId',new DefaultValuePipe(0),new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: Number
    ):string{
        console.log(`getUserInfo userId[#${userId}]`);
        
        return `getUserInfo #${userId}` ;
    }
    /*
    @Put(':userId')
    update(
        @Param('userId') userId: Number,
        @Body() user: UserUpdateDto){
            console.log(`update data user for userId #${userId}`);
            return `update data user for userId #${userId}`;
    }
*/
    @Delete(':userId')
    remove(@Param('userId') userId: number){
        console.log(`This action removes a #${userId} user`);
        return `This action removes a #${userId} user `;
    }
}
