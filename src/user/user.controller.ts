import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, HttpStatus, DefaultValuePipe} from '@nestjs/common';
import { UserCreaterDto } from './dtos/create-user-dto';
import { UserService } from './user.service';
import { Public } from 'src/auth/decorators/public.decorator';
@Controller('users')
//@UseGuards(AuthGuard)
//@UseInterceptors(LoggerInterceptor)
export class UserController {
    constructor(private userService : UserService){}
    @Public()
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

    @Post()
    async createUserAndProfile(@Body() userData: any, @Body() profileData: any) {
        return this.userService.createUserAndProfile(userData, profileData);
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
