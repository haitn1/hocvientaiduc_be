import {
        Body,
        Controller,
        Get,
        HttpCode,
        HttpStatus,
        Post,
        Request,
        UseGuards
      } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { SignupDto } from "./dtos/signup.dto";
import { LoginDto } from "./dtos/login.dto";
import { AuthGuard } from "./auth.guard";
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController{
        constructor(private readonly authService: AuthService) {}

        //POST signup
        @Public()
        @Post('signup') //auth/signup
        async signUp(@Body() signupData : SignupDto){
                console.log(`AuthController - signup #[${JSON.stringify(signupData)}]`);
                return await this.authService.signIn(signupData);
        }
        //POST Login
        @Public()
        @HttpCode(HttpStatus.OK)
        @Post('login') //auth/signup
        async login(@Body() data : LoginDto){
                console.log(`AuthController - login #[${JSON.stringify(data)}]`);
                return await this.authService.login(data);
        }
        
        @Get('profile')
        getProfile(@Request() req) {
                return req.user;
        }
}